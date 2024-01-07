package com.souliosev.igym_backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.Id;

@Getter
@Setter
@Entity
@Table(name = "plans")
public class Plan extends BaseEntity<Plan>{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="plan_id")
    private Long planId;

    @Column(name="duration")
    private int duration;

    @Column(name="price")
    private float standardPrice;

    @Column(name="description")
    private String description;
}
