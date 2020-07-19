package com.ecarsm.vuttr.api.model.tool.resources;

import com.ecarsm.vuttr.api.exception.MyException;
import com.ecarsm.vuttr.api.model.tool.Tool;
import com.ecarsm.vuttr.api.model.tool.service.ToolService;
import java.util.List;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

    /**
     * Returns the list of Tools filtered by tag returns All Tools if no param
     *
     * @param tag
     * @return
     * @throws com.ecarsm.vuttr.api.exception.MyException
     */
    @GetMapping
    public ResponseEntity<List<Tool>> filter(@RequestParam(required = false) String tag) throws MyException {

        List<Tool> resp = this.service.filter(tag);

        return resp != null ? ResponseEntity.ok(resp) : ResponseEntity.noContent().build();
    }

    /**
     * Adding new Tool and returns new Tool with ID
     *
     * @param tool
     * @return new Tool with ID
     * @throws com.ecarsm.vuttr.api.exception.MyException
     */
    @PostMapping
    public ResponseEntity<Tool> filter(@RequestBody Tool tool) throws MyException {

        try {
            tool = this.service.save(tool);
            return ResponseEntity.status(HttpStatus.CREATED).body(tool);

        } catch (Exception ex) {
            throw new MyException("msg.tool.create.error");
        }

    }

    /**
     * Remove tool by ID
     *
     * @param id
     * @return new Tool with ID
     * @throws com.ecarsm.vuttr.api.exception.MyException
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Tool> filter(@PathVariable Long id) throws MyException {

        try {
            this.service.remove(id);
            return ResponseEntity.noContent().build();

        } catch (Exception ex) {
            throw new MyException("msg.tool.create.error");
        }

    }

}
