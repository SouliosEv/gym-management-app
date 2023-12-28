package com.souliosev.igym_backend.service;

import com.souliosev.igym_backend.model.Plan;
import com.souliosev.igym_backend.repository.PlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlanService {

    @Autowired
    private PlanRepository planRepository;

    public List<Plan> getAll() {
        return planRepository.findAll();
    }
}
