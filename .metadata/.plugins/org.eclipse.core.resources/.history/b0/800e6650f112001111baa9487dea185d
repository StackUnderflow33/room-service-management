package com.example.room.controller;

import com.example.room.entity.RoomChecklist;
import com.example.room.service.ChecklistService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/checklist")
@CrossOrigin
public class ChecklistController {

    private final ChecklistService service;

    public ChecklistController(ChecklistService service) {
        this.service = service;
    }

    // Create or Update (Only Latest per Room)
    @PostMapping
    public RoomChecklist save(@RequestBody RoomChecklist checklist) {
        return service.save(checklist);
    }
}