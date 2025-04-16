package com.ecommerce.project.service;

import org.springframework.web.multipart.MultipartFile;

import java.awt.*;
import java.io.File;
import java.io.IOException;

public interface FileService {

     String uploadImage(String path, MultipartFile file) throws IOException;
}
