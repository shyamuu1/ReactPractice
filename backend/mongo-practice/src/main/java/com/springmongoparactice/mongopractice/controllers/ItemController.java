package com.springmongoparactice.mongopractice.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springmongoparactice.mongopractice.models.Items;
import com.springmongoparactice.mongopractice.services.ItemService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ItemController {
	
	private ItemService IS;
	
	@Autowired
	public ItemController(ItemService IS) {
		this.IS = IS;
		
	}
	@GetMapping("/allItems")
	public List<Items> getAllItems() {
		return this.IS.getItems();
	}

}
