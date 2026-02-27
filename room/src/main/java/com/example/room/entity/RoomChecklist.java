package com.example.room.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "room_checklist")
public class RoomChecklist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String roomNumber;

    private boolean foodAvailable;
    private boolean laundryAvailable;
    private boolean cleaningAvailable;
    private boolean maintenanceAvailable;

    private boolean checkedOut;

    private LocalDateTime checkInTime;
    private LocalDateTime checkOutTime;

    // ===== GETTERS & SETTERS =====

    public Long getId() { return id; }

    public String getRoomNumber() { return roomNumber; }
    public void setRoomNumber(String roomNumber) { this.roomNumber = roomNumber; }

    public boolean isFoodAvailable() { return foodAvailable; }
    public void setFoodAvailable(boolean foodAvailable) { this.foodAvailable = foodAvailable; }

    public boolean isLaundryAvailable() { return laundryAvailable; }
    public void setLaundryAvailable(boolean laundryAvailable) { this.laundryAvailable = laundryAvailable; }

    public boolean isCleaningAvailable() { return cleaningAvailable; }
    public void setCleaningAvailable(boolean cleaningAvailable) { this.cleaningAvailable = cleaningAvailable; }

    public boolean isMaintenanceAvailable() { return maintenanceAvailable; }
    public void setMaintenanceAvailable(boolean maintenanceAvailable) { this.maintenanceAvailable = maintenanceAvailable; }

    public boolean isCheckedOut() { return checkedOut; }
    public void setCheckedOut(boolean checkedOut) { this.checkedOut = checkedOut; }

    public LocalDateTime getCheckInTime() { return checkInTime; }
    public void setCheckInTime(LocalDateTime checkInTime) { this.checkInTime = checkInTime; }

    public LocalDateTime getCheckOutTime() { return checkOutTime; }
    public void setCheckOutTime(LocalDateTime checkOutTime) { this.checkOutTime = checkOutTime; }
    
    
}