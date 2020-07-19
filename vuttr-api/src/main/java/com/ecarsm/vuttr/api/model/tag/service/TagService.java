package com.ecarsm.vuttr.api.model.tag.service;

import com.ecarsm.vuttr.api.model.tag.repository.TagRep;
import com.ecarsm.vuttr.api.model.tool.Tag;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

/**
 *
 * @author Ecar. S. M.
 */
@Service
public class TagService {

    @Autowired
    private TagRep repository;

    public List<Tag> filter(String text) {

        Tag tag = new Tag();
        tag.setText(text);

        Example<Tag> example = Example.of(tag, ExampleMatcher.matching().withIgnoreNullValues());

        return this.repository.findAll(example);
    }

}
