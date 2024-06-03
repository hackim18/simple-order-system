package com.simple_order_system.back_end_spring_boot_java.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter // Getter otomatis untuk semua field
@Setter // Setter otomatis untuk semua field
@Entity // Menandakan bahwa kelas ini adalah entitas dalam database
@Table(name = "carts") // Menentukan nama tabel untuk entitas ini di database
public class Carts {

    @Id // Menandakan field ini sebagai Primary Key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Strategi untuk pembuatan nilai ID secara otomatis
    private Long id;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "total")
    private Double total;

    @Column(name = "type")
    private String type;

    @Column(name = "createdAt")
    private LocalDateTime createdAt;

    @Column(name = "updatedAt")
    private LocalDateTime updatedAt;

    @ManyToOne // Menandakan hubungan Many-to-One dengan entitas lain
    @JoinColumn(name = "product_id", nullable = false) // Menentukan kolom join
    private Products product;

    @PrePersist // Metode ini akan dipanggil sebelum entitas disimpan
    protected void onCreate() {
        createdAt = LocalDateTime.now(); // Set waktu saat ini sebagai waktu pembuatan
        updatedAt = LocalDateTime.now(); // Set waktu saat ini sebagai waktu pembaruan
    }
}
