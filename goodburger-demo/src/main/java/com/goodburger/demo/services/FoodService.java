package com.goodburger.demo.services;

import java.util.List;

import org.bson.types.ObjectId;
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
	
	public Food createFood(Food f) {
		f.setId(ObjectId.get());
		this.fr.save(f);
		return f;
	}
	
	public Food getFoodById(ObjectId id) {
		return this.fr.findBy_id(id);
	}
	
	public void removeFood(ObjectId id) {
		Food burger = getFoodById(id);
		this.fr.delete(burger);
	}

}
