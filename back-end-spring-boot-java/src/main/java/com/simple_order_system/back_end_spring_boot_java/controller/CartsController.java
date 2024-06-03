package com.simple_order_system.back_end_spring_boot_java.controller;

import com.simple_order_system.back_end_spring_boot_java.dto.CartRequest;
import com.simple_order_system.back_end_spring_boot_java.entity.Carts;
import com.simple_order_system.back_end_spring_boot_java.services.CartsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // Anotasi untuk menandai bahwa ini adalah Controller REST
@RequestMapping("/carts") // Menentukan path dasar untuk semua handler di dalam controller ini
public class CartsController {

    @Autowired // Injeksi otomatis service yang diperlukan oleh controller ini
    private CartsService cartsService;

    @GetMapping // Handler untuk mendapatkan semua data cart
    public List<Carts> getAllCarts() {
        return cartsService.getAllCarts(); // Memanggil service untuk mendapatkan data
    }

    @DeleteMapping("/{id}") // Handler untuk menghapus cart berdasarkan ID
    public ResponseEntity<Void> deleteCartById(@PathVariable Long id) {
        cartsService.deleteCartById(id); // Memanggil service untuk menghapus data
        return ResponseEntity.noContent().build(); // Mengembalikan response tanpa konten
    }

    @PostMapping("/add") // Handler untuk menambahkan cart baru
    public ResponseEntity<Carts> addCart(@RequestBody CartRequest cartRequest) {
        Carts cart = cartsService.addCart(cartRequest); // Memanggil service untuk menambah data
        return ResponseEntity.ok(cart); // Mengembalikan response dengan data yang ditambahkan
    }
}
