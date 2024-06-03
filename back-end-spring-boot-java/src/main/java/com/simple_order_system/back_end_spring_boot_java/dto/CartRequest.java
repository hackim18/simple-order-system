package com.simple_order_system.back_end_spring_boot_java.dto;

import lombok.Getter;
import lombok.Setter;

@Getter // Anotasi untuk otomatis membuat method getter untuk semua field
@Setter // Anotasi untuk otomatis membuat method setter untuk semua field
public class CartRequest {
    private Long productId; // ID produk yang akan ditambahkan ke dalam keranjang
    private Integer quantity; // Jumlah produk yang akan ditambahkan
    private String type; // Tipe produk
}
