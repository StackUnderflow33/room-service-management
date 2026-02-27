package com.example.room.controller;

import com.example.room.entity.LostItem;
import com.example.room.service.LostItemService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/lostfound")
@CrossOrigin
public class LostFoundController {

    private final LostItemService service;

    @Value("${file.upload-dir:uploads}")
    private String uploadDir;

    public LostFoundController(LostItemService service) {
        this.service = service;
    }

    // Add Lost / Found Item
    @PostMapping(consumes = "multipart/form-data")
    public LostItem addItem(
            @RequestParam String type,
            @RequestParam String name,
            @RequestParam(required = false) String description,
            @RequestParam(required = false) String location,
            @RequestParam(required = false) MultipartFile file
    ) throws Exception {

        LostItem item = new LostItem();
        item.setType(type);
        item.setName(name);
        item.setDescription(description);
        item.setLocation(location);

        return service.reportLostOrFound(item, file);
    }

    // Get All Items
    @GetMapping
    public List<LostItem> getAll() {
        return service.getAll();
    }

    // Verify Item (Admin)
    @PutMapping("/{id}/verify")
    public LostItem verify(@PathVariable Long id,
                           @RequestParam boolean verified) {
        return service.verify(id, verified);
    }

    // Claim Item → DELETE
    @DeleteMapping("/{id}")
    public void claim(@PathVariable Long id) {
        service.claimAndDelete(id);   // ⭐ FIXED HERE
    }
}