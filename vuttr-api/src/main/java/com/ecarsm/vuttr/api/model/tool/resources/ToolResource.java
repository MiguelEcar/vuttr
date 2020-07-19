package com.ecarsm.vuttr.api.model.tool.resources;

import com.ecarsm.vuttr.api.exception.MyException;
import com.ecarsm.vuttr.api.model.tool.Tool;
import com.ecarsm.vuttr.api.model.tool.service.ToolService;
import java.util.List;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Ecar. S. M.
 */
@RestController
@RequestMapping("tools")
@Getter
public class ToolResource {

    @Autowired
    private ToolService service;

    @GetMapping
    public ResponseEntity<List<Tool>> findAll() throws MyException {

        List<Tool> resp = this.service.findAll();

        return resp != null ? ResponseEntity.ok(resp) : ResponseEntity.noContent().build();
    }

}
