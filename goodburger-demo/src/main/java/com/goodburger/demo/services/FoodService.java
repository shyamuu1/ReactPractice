package com.goodburger.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.goodburger.demo.models.Food;
import com.goodburger.demo.repositories.FoodRepository;

@Service
public class FoodService {
	
	private FoodRepository fr;
	
	@Autowired
	public FoodService(FoodRepository fr) {
		this.fr = fr;
	}
	
	public List<Food> getFoodz(){
		return this.fr.findAll();
	}

}
