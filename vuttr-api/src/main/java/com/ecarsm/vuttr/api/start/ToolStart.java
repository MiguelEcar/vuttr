package com.ecarsm.vuttr.api.start;

import com.ecarsm.vuttr.api.model.tool.Tool;
import com.ecarsm.vuttr.api.model.tool.repository.ToolRep;
import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

/**
 *
 * @author Ecar. S. M.
 */
@Component
@Order(2)
public class ToolStart implements ApplicationRunner {

    @Autowired
    private ToolRep toolRep;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        Tool tool1 = new Tool();
        tool1.setTitle("Notion");
        tool1.setLink("https://notion.so");
        tool1.setDescription("All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.");
        tool1.setTags(Arrays.asList("organization", "planning", "collaboration", "writing", "calendar"));

        Tool tool2 = new Tool();
        tool2.setTitle("json-server");
        tool2.setLink("https://github.com/typicode/json-server");
        tool2.setDescription("Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.");
        tool2.setTags(Arrays.asList("api", "json", "schema", "node", "github", "rest"));

        Tool tool3 = new Tool();
        tool3.setTitle("fastify");
        tool3.setLink("https://www.fastify.io/");
        tool3.setDescription("Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.");
        tool3.setTags(Arrays.asList("web", "framework", "node", "http2", "https", "localhost"));
        
        
        this.toolRep.save(tool1);
        this.toolRep.save(tool2);
        this.toolRep.save(tool3);

    }

}
