package com.simple_order_system.back_end_spring_boot_java.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CartRequest {
    private Long productId;
    private Integer quantity;
    private String type;
}
