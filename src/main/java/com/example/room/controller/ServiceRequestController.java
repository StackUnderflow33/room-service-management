package com.example.room.controller;

import com.example.room.entity.ServiceRequest;
import com.example.room.service.ServiceRequestService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/service-requests")
@RequiredArgsConstructor
@CrossOrigin
public class ServiceRequestController {

    private final ServiceRequestService service;

    @PostMapping
    public ResponseEntity<ServiceRequest> create(
            @Valid @RequestBody ServiceRequest request) {

        return ResponseEntity.ok(service.create(request));
    }

    @GetMapping
    public ResponseEntity<List<ServiceRequest>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServiceRequest> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.getById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ServiceRequest> update(
            @PathVariable Long id,
            @RequestBody ServiceRequest request) {

        return ResponseEntity.ok(service.update(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
