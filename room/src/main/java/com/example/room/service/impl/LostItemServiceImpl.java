package com.example.room.service.impl;

import com.example.room.entity.LostItem;
import com.example.room.exception.ResourceNotFoundException;
import com.example.room.repository.LostItemRepository;
import com.example.room.service.LostItemService;
import com.example.room.util.FileUploadUtil;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class LostItemServiceImpl implements LostItemService {

    private final LostItemRepository repository;

    public LostItemServiceImpl(LostItemRepository repository) {
        this.repository = repository;
    }

    @Override
    public LostItem save(LostItem item) {
        item.setCreatedTime(LocalDateTime.now());
        item.setVerified(false);
        return repository.save(item);
    }

    @Override
    public LostItem reportLostOrFound(LostItem item, MultipartFile file) {
        try {
            if (file != null && !file.isEmpty()) {
                String filename = FileUploadUtil.saveFile("uploads", file);
                item.setPhoto(filename);
            }
        } catch (Exception e) {
            throw new RuntimeException("File upload failed");
        }

        item.setCreatedTime(LocalDateTime.now());
        item.setVerified(false);
        return repository.save(item);
    }

    @Override
    public List<LostItem> getAll() {
        return repository.findAll();
    }

    @Override
    public LostItem verify(Long id, boolean verified) {
        LostItem item = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Item not found"));

        item.setVerified(verified);
        return repository.save(item);
    }

    @Override
    public void claimAndDelete(Long id) {
        LostItem item = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Item not found"));

        repository.delete(item);
    }
}