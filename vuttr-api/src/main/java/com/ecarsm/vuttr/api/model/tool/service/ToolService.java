package com.ecarsm.vuttr.api.model.tool.service;

import com.ecarsm.vuttr.api.model.tool.Tool;
import com.ecarsm.vuttr.api.model.tool.repository.ToolRep;
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

    /**
     * Returns the list of Tools saved on database
     *
     * @return
     */
    public List<Tool> findAll() {
        return this.repository.findAll();
    }

}
