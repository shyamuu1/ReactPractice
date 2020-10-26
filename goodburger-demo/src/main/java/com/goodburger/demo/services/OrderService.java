package com.goodburger.demo.services;

import java.math.BigDecimal;
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
	
	public Order createOrder(Food[] allOrders) {
		Order currentOrder = new Order();
		List<Food> currentOrders = Arrays.asList(allOrders);
		BigDecimal totalPrice = updateTotal(currentOrders, currentOrder);
		currentOrder.setId(ObjectId.get());
		currentOrder.setOrders(currentOrders);
		currentOrder.setTotalPrice(totalPrice.toString());
		return currentOrder;
	}
	
	private static BigDecimal updateTotal(List<Food> orders, Order o) {
		ArrayList<BigDecimal> prices = new ArrayList<>();
		BigDecimal sum = new BigDecimal(0);
		for(Food f: orders) {
			String currentPrice = f.getPrice();
			o.setTotalPrice(currentPrice);
			sum = sum.add(o.getTotalPrice()); 
		}
		return sum;
	}

}
