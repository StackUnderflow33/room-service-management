package com.example.room.service;

import com.example.room.entity.RoomChecklist;
import java.util.List;

public interface ChecklistService {

    // CREATE or UPDATE (latest only)
    RoomChecklist save(RoomChecklist checklist);

    RoomChecklist checkIn(RoomChecklist checklist);

    RoomChecklist checkOut(Long id);

    RoomChecklist getLatestByRoom(String roomNumber);

    List<RoomChecklist> getAll();
}