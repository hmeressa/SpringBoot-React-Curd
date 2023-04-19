package com.example.hmeressa.Exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(String id)
    {
        super("user not found with id "+id);
    }
}
