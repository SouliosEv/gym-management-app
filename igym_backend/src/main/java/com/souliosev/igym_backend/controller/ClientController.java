package com.souliosev.igym_backend.controller;


import com.souliosev.igym_backend.model.Client;
import com.souliosev.igym_backend.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clients")
public class ClientController {
    @Autowired
    private ClientService clientService;

    @GetMapping
    public ResponseEntity<List<Client>> getAllClients() {
        List<Client> clients = clientService.getAll();
        return new ResponseEntity<>(clients, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Client> create(@RequestBody Client client){
        try {
            Client newClient = clientService.create(client);
            return new ResponseEntity<>(newClient, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{clientId}")
    public void delete(@PathVariable Long clientId){
        clientService.delete(clientId);
    }

    @PutMapping("/update/{clientId}")
    public ResponseEntity<Client> update(@RequestBody Client client){
        clientService.update(client);
        return new ResponseEntity<>(client, HttpStatus.OK);
    }

}
