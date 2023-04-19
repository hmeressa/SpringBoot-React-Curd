package com.example.hmeressa.Controller;

import com.example.hmeressa.Exception.UserNotFoundException;
import com.example.hmeressa.Repository.StudentRepo;
import com.example.hmeressa.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
@RestController
@CrossOrigin
public class StudentController {
    @Autowired
    StudentRepo studentRepo;
    @PostMapping("/save")
    ResponseEntity<Object> Save(@RequestBody Student student)
    {
        if(student.getId().equals("") || student.getFirstname().equals("")){
            return new ResponseEntity<>("id filed is not empty", HttpStatus.CREATED);
        }
        if(studentRepo.existsById(student.getId())){
            return new ResponseEntity<>("Student with "+student.getId()+" is exist", HttpStatus.CREATED);
        }
        studentRepo.save(student);
        return new ResponseEntity<>("One student is created successfully", HttpStatus.CREATED);
    }
   @GetMapping("/getAll")
   List<Student> getAll()
    {
        System.out.println(studentRepo.findAll());
       return studentRepo.findAll();
    }
    @GetMapping("/getById/{id}")
    Student getById(@PathVariable String id)
    {
        return studentRepo.findById(id)
                .orElseThrow(()-> new UserNotFoundException(id));
    }
    @GetMapping("/deleteAll")
        void deleteAll(@RequestBody Student student)
    {
         studentRepo.delete(student);
    }
    @DeleteMapping("/deleteById/{id}")
    ResponseEntity<Object> deleteById(@PathVariable String id)
    {
        if(!studentRepo.existsById(id)){
            return new ResponseEntity<>("the student is not found "+id+"  successfully", HttpStatus.OK);
//            throw new UserNotFoundException(id);
        }
        studentRepo.deleteById(id);
        return new ResponseEntity<>("One student is deleted with id "+id+"  successfully", HttpStatus.OK);

    }
    @PutMapping("/updateById/{id}")
    Student updateById(@RequestBody Student student, @PathVariable String id)
    {
        return studentRepo.findById(id)
                        .map(user->{
                            user.setId(student.getId());
                            user.setFirstname(student.getFirstname());
                            user.setLastname(student.getLastname());
                            user.setAddress(student.getAddress());
                            return studentRepo.save(student);
                        }).orElseGet(()->{
                            student.setId(id);
                            return studentRepo.save(student);
                });
    }
}
