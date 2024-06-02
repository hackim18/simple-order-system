package com.simple_order_system.back_end_spring_boot_java.loader;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.simple_order_system.back_end_spring_boot_java.entity.Products;
import com.simple_order_system.back_end_spring_boot_java.entity.Product_Types;
import com.simple_order_system.back_end_spring_boot_java.entity.Types;
import com.simple_order_system.back_end_spring_boot_java.repository.ProductsRepository;
import com.simple_order_system.back_end_spring_boot_java.repository.ProductTypesRepository;
import com.simple_order_system.back_end_spring_boot_java.repository.TypesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private ProductsRepository productsRepository;

    @Autowired
    private ProductTypesRepository productTypesRepository;

    @Autowired
    private TypesRepository typesRepository;

    @Override
    public void run(String... args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();

        // Load Types
        InputStream typesInputStream = new ClassPathResource("data/types.json").getInputStream();
        List<Types> types = mapper.readValue(typesInputStream, new TypeReference<List<Types>>() {});
        typesRepository.saveAll(types);

        // Load Products
        InputStream productsInputStream = new ClassPathResource("data/products.json").getInputStream();
        List<Products> products = mapper.readValue(productsInputStream, new TypeReference<List<Products>>() {});
        productsRepository.saveAll(products);

        // Load ProductTypes
        InputStream productTypesInputStream = new ClassPathResource("data/productTypes.json").getInputStream();
        List<Product_Types> productTypes = mapper.readValue(productTypesInputStream, new TypeReference<List<Product_Types>>() {});
        
        for (Product_Types pt : productTypes) {
            Types type = typesRepository.findById(pt.getTypeId()).orElseThrow();
            pt.setType(type); // Change setTypes to setType
            type.getProductTypes().add(pt);
        }
        productTypesRepository.saveAll(productTypes);
    }
}
