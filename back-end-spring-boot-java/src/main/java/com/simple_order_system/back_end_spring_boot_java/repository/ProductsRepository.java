package com.simple_order_system.back_end_spring_boot_java.repository;

import com.simple_order_system.back_end_spring_boot_java.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long> {
}
