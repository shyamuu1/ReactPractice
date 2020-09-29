package com.springmongoparactice.mongopractice.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springmongoparactice.mongopractice.models.Items;
import com.springmongoparactice.mongopractice.repository.ItemsRepository;

//@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ItemController {
	
	private ItemsRepository IRepo;
	
	@Autowired
	public ItemController(ItemsRepository IRepo) {
		this.IRepo = IRepo;
		
	}
	@GetMapping("/allItems")
	public List<Items> getAllItems() {
		return this.IRepo.findAll();
	}

}
