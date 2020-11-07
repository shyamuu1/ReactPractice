package com.goodburger.demo.controllers;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.goodburger.demo.models.Food;
import com.goodburger.demo.services.FoodService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/food")
public class FoodController {
	
	private FoodService fs;
	
	@Autowired
	public FoodController(FoodService fs) {
		this.fs = fs;
	}
	
	//retrieves all menu Items
	@GetMapping("/")
	public List<Food> getMenu(){
		return this.fs.getFoodz();
	}

}
