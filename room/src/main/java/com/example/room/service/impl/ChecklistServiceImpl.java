package com.example.room.service.impl;

import com.example.room.entity.RoomChecklist;
import com.example.room.exception.ResourceNotFoundException;
import com.example.room.repository.ChecklistRepository;
import com.example.room.service.ChecklistService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ChecklistServiceImpl implements ChecklistService {

    private final ChecklistRepository repository;

    public ChecklistServiceImpl(ChecklistRepository repository) {
        this.repository = repository;
    }

    // CREATE or UPDATE latest
    @Override
    public RoomChecklist save(RoomChecklist checklist) {
        checklist.setCheckInTime(LocalDateTime.now());
        checklist.setCheckedOut(false);
        return repository.save(checklist);
    }

    @Override
    public RoomChecklist checkIn(RoomChecklist checklist) {
        checklist.setCheckInTime(LocalDateTime.now());
        checklist.setCheckedOut(false);
        return repository.save(checklist);
    }

    @Override
    public RoomChecklist checkOut(Long id) {
        RoomChecklist checklist = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Checklist not found"));

        checklist.setCheckOutTime(LocalDateTime.now());
        checklist.setCheckedOut(true);

        return repository.save(checklist);
    }

    @Override
    public RoomChecklist getLatestByRoom(String roomNumber) {
        return repository.findTopByRoomNumberOrderByIdDesc(roomNumber)
                .orElseThrow(() -> new ResourceNotFoundException("No checklist found"));
    }

    @Override
    public List<RoomChecklist> getAll() {
        return repository.findAll();
    }
}