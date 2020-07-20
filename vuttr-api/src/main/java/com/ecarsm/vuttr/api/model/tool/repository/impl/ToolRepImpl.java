package com.ecarsm.vuttr.api.model.tool.repository.impl;

import com.ecarsm.vuttr.api.model.tool.Tag;
import com.ecarsm.vuttr.api.model.tool.Tool;
import com.ecarsm.vuttr.api.model.tool.repository.filter.ToolFilter;
import com.ecarsm.vuttr.api.model.tool.repository.query.ToolRepQuery;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class ToolRepImpl implements ToolRepQuery {

    @PersistenceContext
    private EntityManager manager;

    //<editor-fold defaultstate="collapsed" desc="Filter Tag">
    @Override
    public List<Tool> filterTag(String tag) {
        CriteriaBuilder builder = this.manager.getCriteriaBuilder();
        CriteriaQuery<Tool> criteria = builder.createQuery(Tool.class);
        Root<Tool> root = criteria.from(Tool.class);

        if (tag != null) {
            Join<Tool, Tag> tagRoot = root.join(Tool.Field.tagList);
            Predicate predicate = builder.like(builder.lower(tagRoot.get(Tag.Field.text)), "%" + tag.toLowerCase() + "%");
            criteria.where(predicate);
            criteria.distinct(true);
        }

        TypedQuery<Tool> query = this.manager.createQuery(criteria);
        return query.getResultList();
    }
    //</editor-fold>

    @Override
    public List<Tool> filter(ToolFilter filter) {
        CriteriaBuilder builder = this.manager.getCriteriaBuilder();
        CriteriaQuery<Tool> criteria = builder.createQuery(Tool.class);
        Root<Tool> root = criteria.from(Tool.class);

        if (filter.getSearch() != null) {
            Join<Tool, Tag> tag = root.join(Tool.Field.tagList);
            Predicate[] predicates = predicates(filter, builder, root, tag);
            criteria.where(builder.or(predicates));
            criteria.distinct(true);
        }

        TypedQuery<Tool> query = this.manager.createQuery(criteria);

        return query.getResultList();
    }

    private Predicate[] predicates(ToolFilter filter, CriteriaBuilder builder,
            Root<Tool> root, Join<Tool, Tag> tag) {
        List<Predicate> predicates = new ArrayList<>();

        if (filter.isTags()) {
            predicates.add(builder.like(builder.lower(tag.get(Tag.Field.text)), "%" + filter.getSearch().toLowerCase() + "%"));
        } else {
            predicates.add(builder.like(builder.lower(root.get(Tool.Field.title)), "%" + filter.getSearch().toLowerCase() + "%"));
            predicates.add(builder.like(builder.lower(root.get(Tool.Field.link)), "%" + filter.getSearch().toLowerCase() + "%"));
            predicates.add(builder.like(builder.lower(root.get(Tool.Field.description)), "%" + filter.getSearch().toLowerCase() + "%"));
            predicates.add(builder.like(builder.lower(tag.get(Tag.Field.text)), "%" + filter.getSearch().toLowerCase() + "%"));
        }

        return predicates.toArray(new Predicate[predicates.size()]);
    }

}
