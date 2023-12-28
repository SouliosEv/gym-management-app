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
    public List<Subscription> getAll() {
        return subscriptionService.getAll();
    }

    @PostMapping("/create")
    public ResponseEntity<Subscription> create(@RequestBody Subscription subscription){
        Subscription newSubscription = subscriptionService.create(subscription);
        return new ResponseEntity<>(newSubscription, HttpStatus.OK);
    }

    @DeleteMapping("/{subId}")
    public void delete(@PathVariable Long subId){
        subscriptionService.delete(subId);
    }

    @PutMapping("/update/{subId}")
    public ResponseEntity<Subscription> update(@RequestBody Subscription subscription){
        subscriptionService.update(subscription);
        return new ResponseEntity<>(subscription, HttpStatus.OK);
    }
}
