/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.miko.youtube.service;

import com.miko.youtube.model.CommentModel;
import com.miko.youtube.repository.CommentRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author UESR
 */
@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;
    
    public void saveComment(CommentModel given) {
        commentRepository.save(given);
    }
    
    public void deleteComment(long given) {
        commentRepository.deleteById(given);
    }
    
    public List<CommentModel> getAll() {
        List<CommentModel> list = new ArrayList<>();
        commentRepository.findAll().iterator().forEachRemaining(list::add);
        return list;
    }
    
    public List<CommentModel> findByCreator (String given) {
        List<CommentModel> list = new ArrayList<>();
        commentRepository.findByCreator(given).iterator().forEachRemaining(list::add);
        return list;
    }
    
    public List<CommentModel> findCommentsByContent (String given) {
        List<CommentModel> list = new ArrayList<>();
        commentRepository.findCommentsByContent(given).iterator().forEachRemaining(list::add);
        return list;
    }
}
