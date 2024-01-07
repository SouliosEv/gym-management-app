package com.souliosev.igym_backend.controller;


import com.souliosev.igym_backend.model.Subscription;
import com.souliosev.igym_backend.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/subscriptions")
public class SubscriptionController {

    @Autowired
    private SubscriptionService subscriptionService;

    @GetMapping
    public ResponseEntity<List<Subscription>> getAll() {
        try{
            List<Subscription> subscriptions = subscriptionService.getAll();
            return new ResponseEntity<>(subscriptions, HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/create")
    public ResponseEntity<Subscription> create(@RequestBody Subscription subscription){
        try{
            Subscription newSubscription = subscriptionService.create(subscription);
            return new ResponseEntity<>(newSubscription, HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{subId}")
    public ResponseEntity<Boolean> delete(@PathVariable Long subId){
        try {
            subscriptionService.delete(subId);
            return ResponseEntity.ok(true);
        } catch (Exception e) {//SubscriptionNotFoundException custom exception better approach
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update/{subId}")
    public ResponseEntity<Subscription> update(@RequestBody Subscription subscription){
        try {
            subscriptionService.update(subscription);
            return new ResponseEntity<>(subscription, HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
