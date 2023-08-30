package com.example.wimdemo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class HelloWorldController {

    private static final Logger logger = LoggerFactory.getLogger(HelloWorldController.class);

    @PostMapping("/signin")
    public ResponseEntity<Map<String, String>> login(
            @RequestParam("userId") String userId,
            @RequestParam("userPw") String userPw) {
        logger.debug("Received request for URL: /api/signin"); // 요청 URL을 로깅

        String dbId = "123";
        String dbPassword = "xhr";
        Map<String, String> response = new HashMap<>();

        if (userId.equals(dbId) && userPw.equals(dbPassword)) {
            response.put("userId", dbId);
            response.put("name", "Eunji");
            response.put("msg", "로그인 성공");
            return ResponseEntity.ok(response);
        } else {
            response.put("msg", "로그인 실패");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }
}
