package com.ecarsm.vuttr.api.model.tool.repository.query;

import com.ecarsm.vuttr.api.model.tool.Tool;
import com.ecarsm.vuttr.api.model.tool.repository.filter.ToolFilter;
import java.util.List;

/**
 *
 * @author Ecar. S. M.
 */
public interface ToolRepQuery {

    public List<Tool> filter(ToolFilter filter);
    public List<Tool> filterTag(String tag);
}
