package com.ecommerce.project.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "products")
@ToString
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType. AUTO)
    private Long productId;

    @NotBlank
    @Size(min = 3, message = "Product name should have least 3 characters")
    private String productName;
    private String image;

    @Size(min = 6, message = "Product name should have least 6 characters")
    private String description;
    private Integer quantity;
    private Double price;
    private Double discount;
    private double specialPrice;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "seller_id")
    private User user;


}
