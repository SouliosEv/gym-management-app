package com.souliosev.igym_backend.repository;

import com.souliosev.igym_backend.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
