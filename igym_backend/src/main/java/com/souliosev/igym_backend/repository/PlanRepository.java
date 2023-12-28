package com.souliosev.igym_backend.repository;

import com.souliosev.igym_backend.model.Plan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlanRepository extends JpaRepository<Plan, Long> {
}
