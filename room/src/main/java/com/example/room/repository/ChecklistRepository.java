package com.example.room.repository;

import com.example.room.entity.RoomChecklist;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ChecklistRepository extends JpaRepository<RoomChecklist, Long> {

    Optional<RoomChecklist> findTopByRoomNumberOrderByIdDesc(String roomNumber);
}