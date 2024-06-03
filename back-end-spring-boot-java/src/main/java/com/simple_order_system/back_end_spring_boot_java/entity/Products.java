package com.simple_order_system.back_end_spring_boot_java.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter // Getter otomatis dari lombok
@Setter // Setter otomatis dari lombok
@Entity // Menandakan bahwa kelas ini adalah entitas dalam database
@Table(name = "products") // Menentukan nama tabel untuk entitas ini di database
public class Products {

    @Id // Menandakan bahwa field ini adalah Primary Key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Strategi untuk pembuatan nilai ID secara otomatis
    private Long id;

    @Column(name = "name") // Menentukan kolom untuk field ini di tabel
    private String name;

    @Column(name = "price") // Menentukan kolom untuk field ini di tabel
    private Double price;

    @ManyToMany // Menandakan hubungan Many-to-Many dengan entitas lain
    @JoinTable(
        name = "product_types", // Nama tabel join
        joinColumns = @JoinColumn(name = "product_id"), // Kolom join di tabel ini
        inverseJoinColumns = @JoinColumn(name = "type_id") // Kolom join di tabel target
    )
    private List<Types> Types;

    @Column(name = "createdAt") // Menentukan kolom untuk field ini di tabel
    private LocalDateTime createdAt;

    @Column(name = "updatedAt") // Menentukan kolom untuk field ini di tabel
    private LocalDateTime updatedAt;

    @PrePersist // Metode yang dipanggil sebelum entitas disimpan ke database
    protected void onCreate() {
        createdAt = LocalDateTime.now(); // Menetapkan waktu saat ini ke createdAt
        updatedAt = LocalDateTime.now(); // Menetapkan waktu saat ini ke updatedAt
    }

}
