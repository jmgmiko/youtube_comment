/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.miko.youtube.controller;

import com.miko.youtube.model.CollectionModel;
import com.miko.youtube.model.CommentModel;
import com.miko.youtube.service.CollectionService;
import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author UESR
 */
@RestController
@RequestMapping("/collection")
public class CollectionController {
    @Autowired
    CollectionService collectService;
    
    @RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public String createCollection(@RequestBody CollectionModel given) {
        collectService.saveCollection(given);
        return "Created";
    }
    
    @RequestMapping(params = "id", method = RequestMethod.GET)
    public CollectionModel findCollectionById(@RequestParam("id") long given) {
        return collectService.findCollectionById(given);
    }
    
    @RequestMapping(value = "/update", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public String updateCollection(@RequestBody CollectionModel given) {
        collectService.saveCollection(given);
        return given.getId()+" Updated";
    }
    
    @RequestMapping(value = "/{id}/delete", method = RequestMethod.DELETE)
    public String deleteCollectionById(@PathVariable long id) {
        collectService.deleteCollectionById(id);
        return id+" Deleted";
    }
    
    @RequestMapping(value = "/delete", params = "name", method = RequestMethod.DELETE)
    public String deleteCollectionByName(@RequestParam("name") String given) {
        collectService.deleteCollectionByName(given);
        return given+" Deleted";
    }
    
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public Collection<CollectionModel> findAll(){
        return (Collection<CollectionModel>) collectService.getAll();
    }
    
    @RequestMapping(value = "/{id}/comment/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public String createComment(@PathVariable long id, @RequestBody CommentModel given) {
        collectService.saveComment(id, given);
        return "Comment Created";
    }
    
    @RequestMapping(value = "/{id}/comment/update", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public String updateComment(@PathVariable long id, @RequestBody CommentModel given){
        collectService.updateComment(id, given);
        return given.getId()+" updated";
    }
    
}
