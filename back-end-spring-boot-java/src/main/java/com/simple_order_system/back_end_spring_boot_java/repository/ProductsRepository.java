package com.simple_order_system.back_end_spring_boot_java.repository;

import com.simple_order_system.back_end_spring_boot_java.entity.Products;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // Menandai interface ini sebagai Repository, komponen dalam Spring untuk penanganan data
public interface ProductsRepository extends JpaRepository<Products, Long> { // Interface repository untuk entitas Products dengan kunci utama tipe Long
    Page<Products> findAll(Pageable pageable); // Metode untuk mengambil semua produk dengan paginasi
}
