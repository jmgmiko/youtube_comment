/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.miko.youtube.controller;

import com.miko.youtube.model.CommentModel;
import com.miko.youtube.service.CommentService;
import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;


/**
 *
 * @author UESR
 */
@RestController
@RequestMapping("/comment")
public class CommentController {
    @Autowired
    CommentService commentService;
    
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public Collection<CommentModel> findAll(){
        return (Collection<CommentModel>) commentService.getAll();
    }
    
    @RequestMapping(value = "/{id}/delete", method = RequestMethod.DELETE)
    public String deleteComment(@PathVariable long id){
        commentService.deleteComment(id);
        return id+" deleted";
    }
    
    @RequestMapping(params = "creator", method = RequestMethod.GET)
    public Collection<CommentModel> findByCreator(@RequestParam("creator") String given){
        return (Collection<CommentModel>) commentService.findByCreator(given);
    }
    
    @RequestMapping(params = "content", method = RequestMethod.GET)
    public Collection<CommentModel> findCommentsByContent(@RequestParam("content") String given){
        return (Collection<CommentModel>) commentService.findCommentsByContent(given);
    }
}
