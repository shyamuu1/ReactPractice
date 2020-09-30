package com.springmongoparactice.mongopractice.config;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.util.UriUtils;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.MongoCredential;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;

@EnableMongoRepositories(basePackages = { "com.springmongoparactice.mongopractice.repository" })
public class MongoConfig extends AbstractMongoClientConfiguration {

	@Value("${spring.data.mongodb.database}")
	private String databaseName;

	@Override
	protected String getDatabaseName() {
		System.out.print(this.databaseName);
		return this.databaseName;
	}

	@Override
	@Bean
	public MongoClient mongoClient() {
		MongoClient mongoClient = MongoClients
				.create("mongodb+srv://admin:admin@cluster0.dhxhk.mongodb.net/ToDoApp?retryWrites=true&w=majority");
		return mongoClient;
	}

	@Bean
	public MongoTemplate mongoTemplate() throws Exception {
		return new MongoTemplate(mongoClient(), getDatabaseName());
	}

}
