package com.example.wimdemo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // 리액트 개발 서버의 주소
class LoginRequest{
	private String id;
	private String password;
	
	public String getId() {
		return id;
	}
	
    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

public class HelloWorldController {
	private static final Logger logger = LoggerFactory.getLogger(HelloWorldController.class);
	 @PostMapping("/signin")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
    	 logger.debug("Received request for URL: /api/signin"); // 요청 URL을 로깅
    	String dbId = "123";
        String dbPassword = "456";

        if (loginRequest.getId().equals(dbId) && loginRequest.getPassword().equals(dbPassword)) {
            return ResponseEntity.ok("{\"message\": \"login 성공\"}");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .contentType(org.springframework.http.MediaType.APPLICATION_JSON)
                    .body("{\"message\": \"login 실패\"}");
        }
    }
    
}