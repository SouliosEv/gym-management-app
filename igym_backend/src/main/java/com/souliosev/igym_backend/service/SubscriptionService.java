package com.souliosev.igym_backend.service;

import com.souliosev.igym_backend.model.Subscription;
import com.souliosev.igym_backend.repository.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubscriptionService {

    @Autowired
    private SubscriptionRepository subscriptionRepository;

    public List<Subscription> getAll() {
        return subscriptionRepository.findAll();
    }
    public Subscription create(Subscription subscription){
        try{
            return subscriptionRepository.save(subscription);
        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }

    public void delete(Long subId){
        subscriptionRepository.deleteById(subId);
    }

    public void update(Subscription subscription){
        try{
            subscriptionRepository.save(subscription);
        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }
}
