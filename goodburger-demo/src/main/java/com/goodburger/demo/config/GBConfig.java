package com.goodburger.demo.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;

@EnableMongoRepositories(basePackages = { "com.goodburger.demo.repositories" })
public class GBConfig extends AbstractMongoClientConfiguration {
	@Value("${spring.data.mongodb.database}")
	private String dbName;
	
	@Value("${spring.data.mongodb.uri}")
	private String uri;
	
	

	@Override
	protected String getDatabaseName() {
		return this.dbName;
	}
	
	protected String getUri() {
		return this.uri;
	}
	
	protected String setConnection(String dbName, String uri) {
		String connection = uri+dbName +"?retryWrites=true&w=majority";
		return connection;
	}
	
	@Override
	@Bean
	public MongoClient mongoClient() {
		String connString = setConnection(getDatabaseName(), getUri());
		MongoClient mongoClient = MongoClients.create(connString);
		return mongoClient;
	}
	
	@Bean
	public MongoTemplate mongoTemplate() throws Exception {
		return new MongoTemplate(mongoClient(), getDatabaseName());
	}

}
