package com.springmongoparactice.mongopractice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
//exclude = {MongoAutoConfiguration.class, MongoDataAutoConfiguration.class}
@SpringBootApplication()
@EnableAutoConfiguration(exclude={MongoAutoConfiguration.class, MongoDataAutoConfiguration.class})
public class MongoPracticeApplication {

	public static void main(String[] args) {
		SpringApplication.run(MongoPracticeApplication.class, args);
	}

}
