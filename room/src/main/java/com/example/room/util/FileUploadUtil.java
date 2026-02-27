package com.example.room.util;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.UUID;

public class FileUploadUtil {

    public static String saveFile(String uploadDir, MultipartFile file) throws IOException {

        if (file == null || file.isEmpty()) return null;

        Path uploadPath = Paths.get(uploadDir);

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        String filename = UUID.randomUUID() + "_" + file.getOriginalFilename();

        Files.copy(file.getInputStream(),
                uploadPath.resolve(filename),
                StandardCopyOption.REPLACE_EXISTING);

        return filename;
    }
}