package com.simple_order_system.back_end_spring_boot_java.repository;

import com.simple_order_system.back_end_spring_boot_java.entity.Product_Types;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductTypesRepository extends JpaRepository<Product_Types, Long> {
}
