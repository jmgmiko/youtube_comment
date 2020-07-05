/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.miko.youtube.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import org.hibernate.FetchMode;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.Fetch;

/**
 *
 * @author UESR
 */
@Entity // This tells Hibernate to make a table out of this class
@Table(name = "collection") // This tells Hibernate to name the table as user and not User
@DynamicInsert(true)
@DynamicUpdate(true)
public class CollectionModel implements Serializable{

    public CollectionModel() {
    }    
    
    public CollectionModel(@NotEmpty String name,
                           @NotEmpty List<CommentModel> comments) {
        super();
        this.name = name;
        this.comments = comments;
    }
    
    public CollectionModel(@NotEmpty String name) {
        super();
        this.name = name;
        this.comments = new ArrayList<>();
    }
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    @OneToMany(
        mappedBy = "collection",
        cascade = CascadeType.ALL,
        orphanRemoval = true
    )
    private List<CommentModel> comments = new ArrayList();
    
    @NotNull
    @NotEmpty
    @Column(unique=true)
    private String name;
    
    
    public long getId() {
        return id;
    }

    public List<CommentModel> getComments() {
        return comments;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setComments(List<CommentModel> comments) {
        this.comments.retainAll(comments);
        this.comments.addAll(comments);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CollectionModel collect = (CollectionModel) o;
        return Objects.equals(id, collect.getId()) && Objects.equals(name, collect.getName()) && Objects.equals(comments, collect.getComments());
    }    
}
