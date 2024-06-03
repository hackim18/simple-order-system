package com.simple_order_system.back_end_spring_boot_java.controller;

import com.simple_order_system.back_end_spring_boot_java.entity.Products;
import com.simple_order_system.back_end_spring_boot_java.services.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // Anotasi untuk menandai kelas ini sebagai Controller REST
public class ProductsController {

    @Autowired // Injeksi otomatis service yang diperlukan
    private ProductsService productsService;

    @GetMapping("/products") // Mendefinisikan endpoint GET untuk produk
    public Page<Products> getAllProducts(Pageable pageable) {
        return productsService.getAllProducts(pageable); // Mengambil semua produk dengan paging
    }
}
