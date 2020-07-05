/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.miko.youtube.repository;

import com.miko.youtube.model.CollectionModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author UESR
 */
public interface CollectionRepository extends JpaRepository<CollectionModel, Long>{
    @Query("SELECT u FROM CollectionModel u WHERE u.name = :name")
    CollectionModel findByName(@Param("name") String given);
}
