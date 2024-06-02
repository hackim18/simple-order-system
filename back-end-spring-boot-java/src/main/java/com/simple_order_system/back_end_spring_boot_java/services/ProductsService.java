package com.simple_order_system.back_end_spring_boot_java.services;

import com.simple_order_system.back_end_spring_boot_java.entity.Products;

import java.util.List;

public interface ProductsService {
    List<Products> getAllProducts();
    
}
