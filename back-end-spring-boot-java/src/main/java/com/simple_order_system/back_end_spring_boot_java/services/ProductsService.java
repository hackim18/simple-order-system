package com.simple_order_system.back_end_spring_boot_java.services;

import com.simple_order_system.back_end_spring_boot_java.entity.Products;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductsService {
    Page<Products> getAllProducts(Pageable pageable); // Metode untuk mendapatkan semua produk dengan paginasi
    
}
