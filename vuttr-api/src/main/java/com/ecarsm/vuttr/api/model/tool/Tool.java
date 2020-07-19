package com.ecarsm.vuttr.api.model.tool;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Data;
import lombok.experimental.FieldNameConstants;

/**
 *
 * @author Ecar. S. M.
 */
@Entity
@Table(name = "TOOL")
@Data
@FieldNameConstants(innerTypeName = "Field")
public class Tool implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "TITLE", unique = true, length = 100)
    @NotNull
    @Size(max = 100)
    private String title;

    @Column(name = "THIS_LINK", length = 500)
    @NotNull
    @Size(max = 500)
    private String link;

    @Column(name = "DESCRIPTION", length = 500)
    @Size(max = 500)
    private String description;

    @ElementCollection
    @CollectionTable(name = "TOOL_TAG", joinColumns = @JoinColumn(name = "ID", nullable = false))
    @Column(name = "TEXT", length = 100)
    private List<String> tags;

    public Tool() {
        this.tags = new ArrayList<>();
    }

}
