package com.simple_order_system.back_end_spring_boot_java.controller;

import com.simple_order_system.back_end_spring_boot_java.dto.CartRequest;
import com.simple_order_system.back_end_spring_boot_java.entity.Carts;
import com.simple_order_system.back_end_spring_boot_java.services.CartsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carts")
public class CartsController {

    @Autowired
    private CartsService cartsService;

    @GetMapping
    public List<Carts> getAllCarts() {
        return cartsService.getAllCarts();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCartById(@PathVariable Long id) {
        cartsService.deleteCartById(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/add")
    public ResponseEntity<Carts> addCart(@RequestBody CartRequest cartRequest) {
        Carts cart = cartsService.addCart(cartRequest);
        return ResponseEntity.ok(cart);
    }
}
