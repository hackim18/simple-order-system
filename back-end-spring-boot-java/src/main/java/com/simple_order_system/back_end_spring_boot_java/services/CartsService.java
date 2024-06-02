package com.simple_order_system.back_end_spring_boot_java.services;

import com.simple_order_system.back_end_spring_boot_java.dto.CartRequest;
import com.simple_order_system.back_end_spring_boot_java.entity.Carts;
import java.util.List;

public interface CartsService {
    List<Carts> getAllCarts();
    void deleteCartById(Long id);
    Carts addCart(CartRequest cartRequest);
}
