package com.example.kiemtraWeb.Repository;

import com.example.kiemtraWeb.Entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
    Product findByName(String name);
}
