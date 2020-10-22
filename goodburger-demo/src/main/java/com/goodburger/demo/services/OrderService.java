package com.goodburger.demo.services;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.goodburger.demo.models.Order;
import com.goodburger.demo.repositories.OrderRepository;

@Service
public class OrderService {
	
	private OrderRepository orderRepo;
	
	@Autowired
	public OrderService(OrderRepository orderRepo) {
		this.orderRepo = orderRepo;
	}
	
	public Order createOrder(Order currOrder) {
		currOrder.setId(ObjectId.get());
		Order newOrder = this.orderRepo.save(currOrder);
		return newOrder;
	}

}
