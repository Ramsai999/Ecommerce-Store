package com.ecommerce.project.service;

import org.springframework.stereotype.Service;


import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class FileServiceImplemnt implements FileService {

    @Override
    public String uploadImage(String path, File file) throws IOException {
        String originalFilename = String.valueOf(file.getCanonicalFile());

        String randomId = UUID.randomUUID().toString();
        String fileName = randomId.concat(originalFilename.substring(originalFilename.lastIndexOf(".")));
        Path dirPath = Paths.get(path);
        if (!Files.exists(dirPath)) {
            Files.createDirectories(dirPath);
        }

        Path filePath = dirPath.resolve(fileName);
        Files.copy(Path.of(file.getParent()), filePath);
        return fileName;
    }


}

