package com.simple_order_system.back_end_spring_boot_java.repository;

import com.simple_order_system.back_end_spring_boot_java.entity.Carts;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // Anotasi untuk menandai bahwa interface ini adalah Repository
public interface CartsRepository extends JpaRepository<Carts, Long> {
    Optional<Carts> findByProductIdAndType(Long productId, String type); // Metode untuk mencari cart berdasarkan ID produk dan tipe produk
}
