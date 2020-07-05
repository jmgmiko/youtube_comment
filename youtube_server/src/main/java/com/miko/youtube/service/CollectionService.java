/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.miko.youtube.service;

import com.miko.youtube.model.CollectionModel;
import com.miko.youtube.model.CommentModel;
import com.miko.youtube.repository.CollectionRepository;
import com.miko.youtube.repository.CommentRepository;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author UESR
 */
@Service
public class CollectionService {
    @Autowired
    private CollectionRepository collectionRepository;
    
    @Autowired
    private CommentRepository commentRepository;
    
    public void saveCollection(CollectionModel collection) {
        collectionRepository.save(collection);
    }
    
    public CollectionModel findCollectionById(long id) {
        return collectionRepository.findById(id).get();
    }
        
    public void deleteCollectionById(long given) {
        collectionRepository.deleteById(given);
    }
    
    public void deleteCollectionByName(String given) {
        CollectionModel obtain = collectionRepository.findByName(given);
        collectionRepository.deleteById(obtain.getId());
    }
    
    public List<CollectionModel> getAll() {
        List<CollectionModel> list = new ArrayList<>();
        collectionRepository.findAll().iterator().forEachRemaining(list::add);
        return list;
    }
    
    public void saveComment(long id, CommentModel given) {
        CollectionModel collect = findCollectionById(id);
        given.setCollection(collect);
        collect.getComments().add(given);
        commentRepository.save(given);
        collectionRepository.save(collect);
    }
    
    public void updateComment(long id, CommentModel given) {
        CollectionModel collect = findCollectionById(id);
        for (CommentModel o: collect.getComments()) {
            if (o.getId() == given.getId()) {
                o.setContent(given.getContent());
                o.setCreator(given.getCreator());
                break;
            }
        }
        given.setCollection(collect);
        commentRepository.save(given);
        collectionRepository.save(collect);
    }
}
