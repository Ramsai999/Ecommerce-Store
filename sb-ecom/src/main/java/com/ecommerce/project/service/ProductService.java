package com.ecommerce.project.service;

import com.ecommerce.project.payload.ProductDTO;
import com.ecommerce.project.payload.ProductResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ProductService {

    ProductResponse getAllProducts();

    ProductResponse searchByCategory(long categoryId);

    ProductResponse searchProductByKeyword(String keyword);

    ProductDTO updateProduct(Long productId, ProductDTO product);

    ProductDTO deleteProduct(Long productId);


    ProductDTO addProduct(long categoryId, ProductDTO productDTO);


    ProductDTO updatedProductImage(Long productId, MultipartFile image) throws IOException;
}
