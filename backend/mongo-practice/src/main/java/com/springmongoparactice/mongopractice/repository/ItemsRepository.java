package com.springmongoparactice.mongopractice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.springmongoparactice.mongopractice.models.Items;

@Repository
public interface ItemsRepository extends MongoRepository<Items, String>{
	

}
