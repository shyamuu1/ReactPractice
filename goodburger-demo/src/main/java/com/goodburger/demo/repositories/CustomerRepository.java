package com.goodburger.demo.repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.goodburger.demo.models.Customer;

@Repository
public interface CustomerRepository extends MongoRepository<Customer, String> {
	Customer findByemail(String email);
	
	Customer findBycustomerId(ObjectId id);

}
