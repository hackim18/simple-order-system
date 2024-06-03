package com.simple_order_system.back_end_spring_boot_java.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.simple_order_system.back_end_spring_boot_java.entity.Products;
import com.simple_order_system.back_end_spring_boot_java.repository.ProductsRepository;

@Service
public class ProductsServiceImpl implements ProductsService {

    @Autowired
    private ProductsRepository productsRepository;

    @Override
    public Page<Products> getAllProducts(Pageable pageable) {
        return productsRepository.findAll(pageable); // Mengambil semua produk dengan dukungan paging
    }
}
