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
		MongoCredential creds = MongoCredential.createScramSha1Credential("shyamuu.vasanjee@gmail.com", "ToDoApp",
				"catch22!".toCharArray());
		String uri = getUri(creds);
		System.out.println(uri);
		final ConnectionString connectionString = new ConnectionString(uri);
        final MongoClientSettings mongoClientSettings = MongoClientSettings.builder().applyConnectionString(connectionString).build();
        return MongoClients.create(mongoClientSettings);
	}

	private String getUri(MongoCredential creds) {
		List<MongoCredential> allCreds = new ArrayList<>();
		allCreds.add(creds);
		String uri = "mongodb://" + allCreds.get(0).getUserName() + ":" + new String(allCreds.get(0).getPassword()) + "@localhost:27017/ToDoApp";
		return UriUtils.encode(uri, "base64");
	}

	@Bean
	public MongoTemplate mongoTemplate() throws Exception {
		return new MongoTemplate(mongoClient(), "ToDoApp");
	}

}
