/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.miko.youtube.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Lob;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

/**
 *
 * @author UESR
 */
@Entity // This tells Hibernate to make a table out of this class
@Table(name = "comment") // This tells Hibernate to name the table as user and not User
@DynamicInsert(true)
@DynamicUpdate(true)
public class CommentModel implements Serializable {

    public CommentModel() {
    }
    
    public CommentModel(@NotEmpty long id,
                        @NotEmpty String creator,
                        @NotEmpty String comment,
                        @NotEmpty CollectionModel collection) {
        super();
        this.id = id;
        this.creator = creator;
        this.content = comment;
        this.collection = collection;
    }
    
    public CommentModel(@NotEmpty String creator,
                        @NotEmpty String comment,
                        @NotEmpty CollectionModel collection) {
        super();
        this.creator = creator;
        this.content = comment;
        this.collection = collection;
    }
    
    @Id
    @Column(name = "comment_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    @NotNull
    @NotEmpty
    private String creator;
    
    @NotNull
    @NotEmpty
    @Lob
    private String content;
    
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "collection_id")
    @JsonIgnore
    private CollectionModel collection;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public CollectionModel getCollection() {
        return collection;
    }

    public void setCollection(CollectionModel collection) {
        this.collection = collection;
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CommentModel comment = (CommentModel) o;
        return Objects.equals(id, comment.getId()) && Objects.equals(content, comment.getContent()) && Objects.equals(creator, comment.getCreator());
    }  
}
