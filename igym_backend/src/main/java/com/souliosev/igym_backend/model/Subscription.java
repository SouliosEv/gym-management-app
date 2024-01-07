package com.souliosev.igym_backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.Id;
@Getter
@Setter
@Entity
@Table(name = "subscriptions")
public class Subscription extends BaseEntity<Subscription> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="sub_id")
    private Long subId;

    @OneToOne
    @JoinColumn(name = "client_id")
    private Client client;

    @JoinColumn(name = "plan_id")
    @ManyToOne
    private Plan plan;


}
