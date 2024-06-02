package com.simple_order_system.back_end_spring_boot_java.controller;

import com.simple_order_system.back_end_spring_boot_java.entity.Products;
import com.simple_order_system.back_end_spring_boot_java.services.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductsController {

    @Autowired
    private ProductsService productsService;

    @GetMapping("/products")
    public Page<Products> getAllProducts(Pageable pageable) {
        return productsService.getAllProducts(pageable);
    }
}
