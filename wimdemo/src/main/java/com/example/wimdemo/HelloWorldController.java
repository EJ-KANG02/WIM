package com.example.wimdemo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
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

    @PostMapping("/api/login")
    @CrossOrigin(origins = "http://localhost:3000") // 리액트 개발 서버의 주소
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        String dbId = "123";
        String dbPassword = "456";

        if (loginRequest.getId().equals(dbId) && loginRequest.getPassword().equals(dbPassword)) {
            return ResponseEntity.ok("{'message': 'login 성공'}"); // 로그인 성공
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{'message': 'login 실패'}"); // 로그인 실패
        }
    }
    
}