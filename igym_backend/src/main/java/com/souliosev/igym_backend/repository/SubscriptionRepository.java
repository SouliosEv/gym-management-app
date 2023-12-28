package com.souliosev.igym_backend.repository;

import com.souliosev.igym_backend.model.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
}
