package com.simple_order_system.back_end_spring_boot_java.entity;

import java.sql.Date;

import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "product_types")
public class Product_Types {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "product_id")
    private long product_id;

    @Column(name = "type_id")
    private long type_id;

    @ManyToOne
    @JoinColumn(name = "type_id", insertable = false, updatable = false)
    private Types type;

    @ManyToOne
    @JoinColumn(name = "product_id", insertable = false, updatable = false)
    private Products product;

    @Column(name = "createdAt")
    private Date createdAt;

    @Column(name = "updatedAt")
    private Date updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = new Date(System.currentTimeMillis());
        updatedAt = new Date(System.currentTimeMillis());
    }
}
