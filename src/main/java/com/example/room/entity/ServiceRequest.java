package com.example.room.entity;

import com.example.room.enums.Priority;
import com.example.room.enums.RequestStatus;
import com.example.room.enums.RequestType;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "service_requests")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ServiceRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String roomNumber;

    @NotBlank
    private String guestName;

    @Enumerated(EnumType.STRING)
    private RequestType requestType;

    private String description;

    @Enumerated(EnumType.STRING)
    private Priority priority;

    @Enumerated(EnumType.STRING)
    private RequestStatus status;

    private LocalDateTime requestedTime;

    private LocalDateTime completedTime;
}
