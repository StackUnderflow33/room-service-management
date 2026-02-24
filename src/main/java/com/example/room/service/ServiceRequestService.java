package com.example.room.service;

import com.example.room.entity.ServiceRequest;

import java.util.List;

public interface ServiceRequestService {

    ServiceRequest create(ServiceRequest request);

    List<ServiceRequest> getAll();

    ServiceRequest getById(Long id);

    ServiceRequest update(Long id, ServiceRequest request);

    void delete(Long id);
}
