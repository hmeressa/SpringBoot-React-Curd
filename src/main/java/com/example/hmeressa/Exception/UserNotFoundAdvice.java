package com.example.hmeressa.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@ControllerAdvice
public class UserNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)

    String userNotFoundException(UserNotFoundException userNotFoundException)
    {
        return userNotFoundException.getMessage();
    }
}
