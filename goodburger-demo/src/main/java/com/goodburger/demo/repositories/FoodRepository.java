package com.goodburger.demo.repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.goodburger.demo.models.Food;

@Repository
public interface FoodRepository extends MongoRepository<Food, String> {
	
	Food findBy_id(ObjectId id);

}
