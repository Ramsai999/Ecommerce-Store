package com.ecommerce.project.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public abstract class FileService {

    protected abstract String uploadImage(String path, MultipartFile file) throws IOException;
}
