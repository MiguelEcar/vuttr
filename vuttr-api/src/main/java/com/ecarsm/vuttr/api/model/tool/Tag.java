package com.ecarsm.vuttr.api.model.tool;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldNameConstants;

/**
 *
 * @author Ecar. S. M.
 */
@Entity
@Table(name = "TOOL_TAG")
@Data
@FieldNameConstants(innerTypeName = "Field")
@NoArgsConstructor
@AllArgsConstructor
public class Tag implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "TEXT", length = 100)
    @Size(max = 100)
    @NotNull
    private String text;

    @ManyToOne(optional = false)
    @JoinColumn(name = "TOOL", referencedColumnName = "ID")
    private Tool tool;
}
