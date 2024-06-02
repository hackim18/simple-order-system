package com.simple_order_system.back_end_spring_boot_java.services;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simple_order_system.back_end_spring_boot_java.entity.Products;
import com.simple_order_system.back_end_spring_boot_java.repository.ProductsRepository;

@Service
public class ProductsServiceImpl implements ProductsService {

    @Autowired
    private ProductsRepository productsRepository;

    @Override
    public List<Products> getAllProducts() {
        return productsRepository.findAll();
    }
}
