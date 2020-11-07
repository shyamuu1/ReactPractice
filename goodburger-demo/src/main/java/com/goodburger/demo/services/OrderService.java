package com.goodburger.demo.services;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
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
	
	public List<Order> getAllOrders(){
		return this.orderRepo.findAll();
	}
	
	
	public List<Food> getallOrdersById(ObjectId id){
		Order o = this.orderRepo.findBy_id(id);
		return o.getOrders();
	}
	
	public void submitOrder(Order o) {
		this.orderRepo.save(o);
	}
	
	public Order createOrder(Food[] allOrders) {
		Order currentOrder = new Order();
		List<Food> currentOrders = Arrays.asList(allOrders);
		String totalPrice = updateTotal(currentOrders, currentOrder);
		currentOrder.setId(ObjectId.get());
		updateOrder(currentOrder, currentOrders, totalPrice);
		System.out.println(currentOrder.toString());
		this.orderRepo.save(currentOrder);
		return currentOrder;
	}
	public Order createDefaultOrder() {
		Order o = new Order();
		this.orderRepo.save(o);
		return o;
	}
	
	public void addFoodToOrder(Food f, Order currentOrder) {
		List<Food> currentOrders = currentOrder.getOrders();
		currentOrders.add(f);
		String currentTotal = updateTotal(currentOrders, currentOrder);
		updateOrder(currentOrder, currentOrders, currentTotal);
		
	}
	
	
	
	public List<Food> deleteFoodInOrder(Order o, ObjectId foodId) {
		System.out.println("IN ORDER SERVICE");
		List<Food> currentorders = o.getOrders();
		List<Food> filteredOrders = getFilteredOutput(currentorders, foodId);
		String total = updateTotal(filteredOrders, o);
		updateOrder(o,filteredOrders, total);
		return o.getOrders();
	}
	
//HELPER METHODS
	
	//helper method to get totalPrice of the food items
	private static String updateTotal(List<Food> orders, Order o) {
		BigDecimal sum = new BigDecimal(0);
		for(Food f: orders) {
			String currentPrice = f.getPrice();
			o.setTotalPrice(currentPrice);
			sum = sum.add(o.getTotalPrice()); 
		}
		return sum.toString();
	}
	//helper method to delete an foodItem from an Order
	public static List<Food> getFilteredOutput(List<Food> orders, ObjectId foodId){
		return orders.stream().filter(order -> !order.getId().equals(foodId.toHexString())).collect(Collectors.toList());
	}
	
	//updates the food list and total Price
	public static void updateOrder(Order o, List<Food> myOrders, String totalPrice) {
		o.setOrders(myOrders);
		o.setTotalPrice(totalPrice);
	}
	

}
