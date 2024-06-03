package com.simple_order_system.back_end_spring_boot_java.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter // Anotasi untuk membuat method getter secara otomatis
@Setter // Anotasi untuk membuat method setter secara otomatis
@NoArgsConstructor // Anotasi untuk membuat konstruktor tanpa argumen
@AllArgsConstructor // Anotasi untuk membuat konstruktor dengan semua argumen
@Entity // Menandakan bahwa kelas ini adalah entitas dalam database
@Table(name = "types") // Menentukan nama tabel untuk entitas ini di database
public class Types {

    @Id // Menandakan bahwa field ini adalah Primary Key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Strategi untuk pembuatan nilai ID secara otomatis
    private long id;

    @Column(name = "name") // Menentukan kolom untuk field ini di tabel dengan nama "name"
    private String name;

    @Column(name = "createdAt") // Menentukan kolom untuk field ini di tabel dengan nama "createdAt"
    private LocalDateTime createdAt;

    @Column(name = "updatedAt") // Menentukan kolom untuk field ini di tabel dengan nama "updatedAt"
    private LocalDateTime updatedAt;

    @PrePersist // Metode ini akan dipanggil sebelum entitas disimpan ke database
    protected void onCreate() {
        createdAt = LocalDateTime.now(); // Menetapkan waktu saat ini ke createdAt
        updatedAt = LocalDateTime.now(); // Menetapkan waktu saat ini ke updatedAt
    }

}
