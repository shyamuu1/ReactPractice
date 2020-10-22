package com.goodburger.demo.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.goodburger.demo.models.Food;
import com.goodburger.demo.models.Order;
import com.goodburger.demo.repositories.OrderRepository;

@Service
public class OrderService {
	
	private OrderRepository orderRepo;
	
	@Autowired
	public OrderService(OrderRepository orderRepo) {
		this.orderRepo = orderRepo;
	}
	
	public String createOrder(String[] allOrders) {
//		List<String> allfoods = new ArrayList<String>(Arrays.asList(allOrders.split(",")));
		System.out.println("IN ORDER SERVICE "+allOrders);
		Order currOrder = new Order();
		currOrder.setId(ObjectId.get());
//		Order newOrder = this.orderRepo.save(currOrder);
		return currOrder.toString();
	}
	
	private static void getPrices(List<Food> allfoods) {
		//do stuff
	}

}
