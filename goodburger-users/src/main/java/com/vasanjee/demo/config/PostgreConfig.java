package com.vasanjee.demo.config;

import javax.sql.DataSource;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;

@Configuration
public class PostgreConfig {
	
	@Bean(name="postgresDb")
	@ConfigurationProperties(prefix="spring.sv-postgres")
	public DataSource pgDataSource() {
		return DataSourceBuilder.create().build();
	}
	
	@Bean(name = "postgresTemplate")
	public JdbcTemplate pgJdbcTemplate(DataSource ds) {
		return new JdbcTemplate(ds);
	}

}
