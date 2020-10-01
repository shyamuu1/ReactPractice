package com.springmongoparactice.mongopractice.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;

@EnableMongoRepositories(basePackages = { "com.springmongoparactice.mongopractice.repository" })
public class MongoConfig extends AbstractMongoClientConfiguration {

	@Value("${spring.data.mongodb.database}")
	private String databaseName;
	
	@Value("${spring.data.mongodb.uri}")
	private String uri;
	
	@Override
	protected String getDatabaseName() {
		System.out.print(this.databaseName);
		return this.databaseName;
	}
	
	protected String getUri() {
		return this.uri;
	}
	
	protected String setConnectionString(String dbName, String uri) {
		String conn = uri+dbName+"?retryWrites=true&w=majority";
		return conn;
	}

	@Override
	@Bean
	public MongoClient mongoClient() {
		String connection = setConnectionString(getDatabaseName(), getUri());
		MongoClient mongoClient = MongoClients.create(connection);
		return mongoClient;
	}

	@Bean
	public MongoTemplate mongoTemplate() throws Exception {
		return new MongoTemplate(mongoClient(), getDatabaseName());
	}

}
