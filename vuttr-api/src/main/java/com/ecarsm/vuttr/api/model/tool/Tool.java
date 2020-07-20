package com.ecarsm.vuttr.api.model.tool;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import lombok.experimental.FieldNameConstants;

/**
 *
 * @author Ecar. S. M.
 */
@Entity
@Table(name = "TOOL")
@Data
@FieldNameConstants(innerTypeName = "Field")
@EqualsAndHashCode(exclude = {"tagList", "tags"})
@ToString(exclude = {"tagList", "tags"})
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

    @OneToMany(cascade = {CascadeType.ALL}, fetch = FetchType.EAGER, mappedBy = "tool")
    @JsonIgnore
    private Set<Tag> tagList;

    @Transient
    private List<String> tags;

    public Tool() {
        this.tags = new ArrayList<>();
    }

    public List<String> getTags() {
        this.tags = new ArrayList<>();
        for (Tag tag : this.tagList) {
            this.tags.add(tag.getText());
        }
        return this.tags;
    }

    @PrePersist
    @PreUpdate
    public void parseTags() {
        if (this.tagList == null) {
            this.tagList = new HashSet<>();
        } else {
            this.tagList.clear();
        }

        for (String text : this.tags) {
            this.tagList.add(new Tag(null, text, this));
        }
    }
}
