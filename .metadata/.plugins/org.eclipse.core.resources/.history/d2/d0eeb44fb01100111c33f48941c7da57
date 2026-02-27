package com.example.room.service.impl;

import com.example.room.entity.ServiceRequest;
import com.example.room.enums.RequestStatus;
import com.example.room.exception.ResourceNotFoundException;
import com.example.room.repository.ServiceRequestRepository;
import com.example.room.service.ServiceRequestService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ServiceRequestServiceImpl implements ServiceRequestService {

    private final ServiceRequestRepository repository;

    public ServiceRequestServiceImpl(ServiceRequestRepository repository) {
        this.repository = repository;
    }

    @Override
    public ServiceRequest create(ServiceRequest request) {

        request.setStatus(RequestStatus.PENDING);
        request.setRequestedTime(LocalDateTime.now());

        return repository.save(request);
    }

    @Override
    public List<ServiceRequest> getAll() {
        return repository.findAll();
    }

    @Override
    public ServiceRequest getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Request not found"));
    }

    @Override
    public ServiceRequest update(Long id, ServiceRequest request) {

        ServiceRequest existing = getById(id);

        existing.setPriority(request.getPriority());
        existing.setStatus(request.getStatus());
        existing.setDescription(request.getDescription());

        if (request.getStatus() == RequestStatus.COMPLETED) {
            existing.setCompletedTime(LocalDateTime.now());
        }

        return repository.save(existing);
    }

    @Override
    public void delete(Long id) {
        ServiceRequest existing = getById(id);
        repository.delete(existing);
    }
}