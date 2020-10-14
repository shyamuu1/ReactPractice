package com.goodburger.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import com.goodburger.demo.config.GBConfig;

@SpringBootApplication
@Import(GBConfig.class)
public class GoodburgerDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(GoodburgerDemoApplication.class, args);
	}

}
