package com.souliosev.igym_backend.service;

import com.souliosev.igym_backend.model.Client;
import com.souliosev.igym_backend.repository.ClientRepository;
import jakarta.persistence.PersistenceException;
import jakarta.persistence.TransactionRequiredException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public List<Client> getAll() {
        return clientRepository.findAll();
    }

    public Client create(Client client){
        try{
            return clientRepository.save(client);
        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }

    public void delete(Long clientId){
        clientRepository.deleteById(clientId);
    }

    public void update(Client client){
        try{
            clientRepository.save(client);
        }catch (Exception e){
            throw new RuntimeException(e);
        }

    }
}
