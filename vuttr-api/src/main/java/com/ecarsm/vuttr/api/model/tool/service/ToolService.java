package com.ecarsm.vuttr.api.model.tool.service;

import com.ecarsm.vuttr.api.exception.MyException;
import com.ecarsm.vuttr.api.model.tool.Tool;
import com.ecarsm.vuttr.api.model.tool.repository.ToolRep;
import com.ecarsm.vuttr.api.model.tool.repository.filter.ToolFilter;
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

    public List<Tool> findAll() {
        return this.repository.findAll();
    }

    public List<Tool> filterTag(String tag) {
        return this.repository.filterTag(tag);
    }

    public List<Tool> filter(ToolFilter filter) {
        return this.repository.filter(filter);
    }

    public Tool save(Tool tool) throws MyException {
        return this.repository.save(tool);
    }

    public void remove(Long id) throws MyException {
        this.repository.deleteById(id);
    }

}
