package com.simple_order_system.back_end_spring_boot_java.services;

import com.simple_order_system.back_end_spring_boot_java.dto.CartRequest;
import com.simple_order_system.back_end_spring_boot_java.entity.Carts;
import java.util.List;

// Interface untuk layanan yang berhubungan dengan keranjang belanja
public interface CartsService {
    List<Carts> getAllCarts(); // Mengambil semua keranjang belanja yang tersedia
    void deleteCartById(Long id); // Menghapus keranjang belanja berdasarkan ID
    Carts addCart(CartRequest cartRequest); // Menambahkan keranjang belanja baru berdasarkan permintaan
}
