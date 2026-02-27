package com.example.room.service;

import com.example.room.entity.User;

public interface UserService {

    User register(User user);

    User login(String email, String password);
}