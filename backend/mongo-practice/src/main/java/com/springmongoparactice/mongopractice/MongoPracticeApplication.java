package com.springmongoparactice.mongopractice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import com.springmongoparactice.mongopractice.config.MongoConfig;


@SpringBootApplication
@Import(MongoConfig.class)
//@EnableAutoConfiguration(exclude={MongoAutoConfiguration.class, MongoDataAutoConfiguration.class})
public class MongoPracticeApplication {

	public static void main(String[] args) {
		SpringApplication.run(MongoPracticeApplication.class, args);
	}

}
