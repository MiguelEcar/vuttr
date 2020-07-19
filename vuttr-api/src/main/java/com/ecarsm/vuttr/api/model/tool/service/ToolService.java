package com.ecarsm.vuttr.api.model.tool.service;

import com.ecarsm.vuttr.api.model.tag.service.TagService;
import com.ecarsm.vuttr.api.model.tool.Tag;
import com.ecarsm.vuttr.api.model.tool.Tool;
import com.ecarsm.vuttr.api.model.tool.repository.ToolRep;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Ecar. S. M.
 */
@Service
public class ToolService {

    @Autowired
    private ToolRep repository;

    @Autowired
    private TagService tagService;

    public List<Tool> findAll() {
        return this.repository.findAll();
    }

    public List<Tool> filter(String text) {

        if (text == null) {
            return this.repository.findAll();
        } else {
            List<Tool> list = new ArrayList<>();
            for (Tag tag : this.tagService.filter(text)) {
                list.add(tag.getTool());
            }
            return list;
        }

    }

}
