package com.ecarsm.vuttr.api.model.tool.repository;

import com.ecarsm.vuttr.api.model.tool.Tool;
import com.ecarsm.vuttr.api.model.tool.repository.query.ToolRepQuery;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ToolRep extends JpaRepository<Tool, Long>, ToolRepQuery {


}
