package com.example.hmeressa;

import com.example.hmeressa.model.Student;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController

public class first {
   private static Map<String,Student> repo = new HashMap<>();

   static {
       Student student1 = new Student();
       student1.setId("1");
       student1.setFirstname("Hiluf");
       student1.setLastname("Meressa");
       student1.setAddress("Alamata");
       repo.put(student1.getId(),student1);

       Student student2 = new Student();
       student2.setId("2");
       student2.setFirstname("Amare");
       student2.setLastname("Meressa");
       student2.setAddress("Alamata");
       repo.put(student2.getId(),student2);

   }

    @PostMapping(value="/add")
    public ResponseEntity<Object> add(@RequestBody Student student) {
        repo.put(student.getId(), student);
        return new ResponseEntity<>("Product is created successfully",
                HttpStatus.CREATED);
    }

//get all records
    @CrossOrigin
    @GetMapping(value="/getAllq")
    public ResponseEntity<Object> getProduct() {
        return new ResponseEntity<>(repo.values(),HttpStatus.OK);
    }

    //get specific records
    @GetMapping(value="/geta/{id}")
    public ResponseEntity<Object> get(@PathVariable String id) {
        return new ResponseEntity<>(repo.get(id),HttpStatus.OK);
    }
   //delete records by id
    @DeleteMapping(value="/deletae/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id) {
        repo.remove(id);
        return new ResponseEntity<>("Product is deleted successfully",
                HttpStatus.OK);

    }
    @PutMapping(value="/update/{id}")
    public ResponseEntity<Object> update(@PathVariable String id,@RequestBody Student student) {
        repo.remove(id);
        student.setId(id);
        repo.put(id,student);
        return new ResponseEntity<>("Product is update successfully",
                HttpStatus.OK);

    }



}
