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
        // Memuat data produk
        ObjectMapper mapper = new ObjectMapper();
        TypeReference<List<Products>> typeReference = new TypeReference<List<Products>>(){};
        InputStream inputStream = new ClassPathResource("data/products.json").getInputStream();
        List<Products> products = mapper.readValue(inputStream, typeReference);
        productsRepository.saveAll(products);
        System.out.println("Products Loaded");

        // Memuat data tipe
        TypeReference<List<Types>> typeReferenceTypes = new TypeReference<List<Types>>(){};
        InputStream inputStreamTypes = new ClassPathResource("data/types.json").getInputStream();
        List<Types> types = mapper.readValue(inputStreamTypes, typeReferenceTypes);
        typesRepository.saveAll(types);
        System.out.println("Types Loaded");

        // Memuat data hubungan produk dengan tipe
        TypeReference<List<Product_Types>> typeReferenceProductTypes = new TypeReference<List<Product_Types>>(){};
        InputStream inputStreamProductTypes = new ClassPathResource("data/product_types.json").getInputStream();
        List<Product_Types> productTypes = mapper.readValue(inputStreamProductTypes, typeReferenceProductTypes);
        productTypesRepository.saveAll(productTypes);
        System.out.println("Product_Types Loaded");

        
    }
}
