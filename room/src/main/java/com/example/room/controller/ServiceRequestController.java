package com.example.room.controller;

import com.example.room.entity.ServiceRequest;
import com.example.room.service.ServiceRequestService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/service-requests")
@CrossOrigin
public class ServiceRequestController {

    private final ServiceRequestService service;

    public ServiceRequestController(ServiceRequestService service) {
        this.service = service;
    }

    // Create Request
    @PostMapping
    public ServiceRequest create(@RequestBody ServiceRequest request) {
        return service.create(request);
    }

    // Get All Requests
    @GetMapping
    public List<ServiceRequest> getAll() {
        return service.getAll();
    }

    // Update Priority / Status
    @PutMapping("/{id}")
    public ServiceRequest update(@PathVariable Long id,
                                 @RequestBody ServiceRequest request) {
        return service.update(id, request);
    }
}