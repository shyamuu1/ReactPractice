package com.springmongoparactice.mongopractice.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springmongoparactice.mongopractice.models.Items;
import com.springmongoparactice.mongopractice.repository.ItemsRepository;

@Service
public class ItemService {
	
	private ItemsRepository Irepo;
	
	@Autowired
	public ItemService(ItemsRepository Irepo) {
		this.Irepo = Irepo;
	}
	
	public List<Items> getItems() {
		return this.Irepo.findAll();
	}

}
