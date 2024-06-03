package com.simple_order_system.back_end_spring_boot_java.entity;

import java.sql.Date;

import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter // Getter otomatis untuk semua field
@Setter // Setter otomatis untuk semua field
@NoArgsConstructor // Constructor tanpa argumen
@AllArgsConstructor // Constructor dengan semua argumen
@Entity // Menandakan bahwa ini adalah entitas
@Table(name = "product_types") // Menentukan nama tabel untuk entitas ini di database
public class Product_Types {

    @Id // Menandakan field ini sebagai Primary Key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Strategi untuk pembuatan nilai ID secara otomatis
    private long id;

    @Column(name = "product_id") // Kolom untuk product_id
    private long product_id;

    @Column(name = "type_id") // Kolom untuk type_id
    private long type_id;

    @ManyToOne // Relasi Many-to-One dengan entitas Types
    @JoinColumn(name = "type_id", insertable = false, updatable = false) // Join kolom dengan field type_id, tidak bisa diinsert atau update
    private Types type;

    @ManyToOne // Relasi Many-to-One dengan entitas Products
    @JoinColumn(name = "product_id", insertable = false, updatable = false) // Join kolom dengan field product_id, tidak bisa diinsert atau update
    private Products product;

    @Column(name = "createdAt") // Kolom untuk createdAt
    private Date createdAt;

    @Column(name = "updatedAt") // Kolom untuk updatedAt
    private Date updatedAt;

    @PrePersist // Method yang dipanggil sebelum entitas disimpan
    protected void onCreate() {
        createdAt = new Date(System.currentTimeMillis());
        updatedAt = new Date(System.currentTimeMillis());
    }
}
