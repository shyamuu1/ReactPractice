package com.goodburger.demo.services;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.goodburger.demo.models.Food;
import com.goodburger.demo.models.Order;
import com.goodburger.demo.repositories.OrderRepository;

@Service
public class OrderService {
	
	private OrderRepository orderRepo;
	private MongoTemplate mongoTemplate;
	
	@Autowired
	public OrderService(OrderRepository orderRepo, MongoTemplate mongoTemplate) {
		this.orderRepo = orderRepo;
		this.mongoTemplate = mongoTemplate;
	}
	
	public Order createOrder(Food[] allOrders) {
		Order currentOrder = new Order();
		List<Food> currentOrders = Arrays.asList(allOrders);
		BigDecimal totalPrice = updateTotal(currentOrders, currentOrder);
		currentOrder.setId(ObjectId.get());
		currentOrder.setOrders(currentOrders);
		currentOrder.setTotalPrice(totalPrice.toString());
		this.orderRepo.save(currentOrder);
		return currentOrder;
	}
	
	public List<Order> getAllOrders(){
		return this.orderRepo.findAll();
	}
	public List<Food> getallOrdersById(ObjectId id){
		Order o = this.orderRepo.findBy_id(id);
		return o.getOrders();
	}
	
	public Order deleteFoodInOrder(Order o, ObjectId foodId) {
		System.out.println("IN ORDER SERVICE");
		List<Food> currentorders = o.getOrders();
		List<Food> filteredOrders = getFilteredOutput(currentorders, foodId);
		o.setOrders(filteredOrders);
		this.orderRepo.save(o);
		return o;
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
	
	private static List<Food> getFilteredOutput(List<Food> orders, ObjectId foodId){
		return orders.stream().filter(order -> !order.getId().equals(foodId.toHexString())).collect(Collectors.toList());
	}
	
//	private static void printList(List<Food> arr, ObjectId id) {
//		int idx =0;
//		for(Food f: arr) {
//			idx++;
//			System.out.println(idx+") "+f.toString());
//		}
//	}

}
