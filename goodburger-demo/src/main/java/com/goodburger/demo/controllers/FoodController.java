package com.goodburger.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.goodburger.demo.models.Food;
import com.goodburger.demo.services.FoodService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class FoodController {
	
	private FoodService fs;
	
	@Autowired
	public FoodController(FoodService fs) {
		this.fs = fs;
	}
	
	@GetMapping("/allFoodz")
	public List<Food> getAllFoods(){
		return this.fs.getFoodz();
	}

}
