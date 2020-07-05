/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.miko.youtube.repository;

import com.miko.youtube.model.CommentModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

/**
 *
 * @author UESR
 */
public interface CommentRepository extends JpaRepository<CommentModel, Long>{
    @Query("SELECT u FROM CommentModel u WHERE u.creator = :creator")
    List<CommentModel> findByCreator(@Param("creator") String given);
    
    @Query("SELECT u FROM CommentModel u WHERE u.content LIKE %:content%")
    List<CommentModel> findCommentsByContent(@Param("content") String given);
}
