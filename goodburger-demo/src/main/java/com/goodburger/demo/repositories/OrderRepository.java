package com.goodburger.demo.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.goodburger.demo.models.Order;

@Repository
public interface OrderRepository extends MongoRepository<Order, String>{
	

}
