package com.simple_order_system.back_end_spring_boot_java.services;

import com.simple_order_system.back_end_spring_boot_java.dto.CartRequest;
import com.simple_order_system.back_end_spring_boot_java.entity.Carts;
import com.simple_order_system.back_end_spring_boot_java.entity.Products;
import com.simple_order_system.back_end_spring_boot_java.repository.CartsRepository;
import com.simple_order_system.back_end_spring_boot_java.repository.ProductsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartsServiceImpl implements CartsService {

    @Autowired
    private CartsRepository cartsRepository;

    @Autowired
    private ProductsRepository productsRepository;

    @Override
    public List<Carts> getAllCarts() {
        return cartsRepository.findAll();
    }

    @Override
    public void deleteCartById(Long id) {
        cartsRepository.deleteById(id);
    }

    @Override
    public Carts addCart(CartRequest cartRequest) {
        Optional<Products> productOpt = productsRepository.findById(cartRequest.getProductId());
        if (!productOpt.isPresent()) {
            throw new RuntimeException("Product not found");
        }

        Products product = productOpt.get();
        double totalPrice = product.getPrice() * cartRequest.getQuantity();

        Optional<Carts> findCartOpt = cartsRepository.findByProductIdAndType(product.getId(), cartRequest.getType());
        Carts cart;
        if (findCartOpt.isPresent()) {
            cart = findCartOpt.get();
            cart.setQuantity(cart.getQuantity() + cartRequest.getQuantity());
            cart.setTotal(cart.getTotal() + totalPrice);
            cartsRepository.save(cart);
        } else {
            cart = new Carts();
            cart.setProduct(product);
            cart.setQuantity(cartRequest.getQuantity());
            cart.setTotal(totalPrice);
            cart.setType(cartRequest.getType());
            cartsRepository.save(cart);
        }

        return cart;
    }
}
