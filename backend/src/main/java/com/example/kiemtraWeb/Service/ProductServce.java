package com.example.kiemtraWeb.Service;

import com.example.kiemtraWeb.Entities.Product;
import com.example.kiemtraWeb.Modes.ProductStatus;
import com.example.kiemtraWeb.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductServce {
    final ProductRepository productRepository;
    @Autowired
    public ProductServce(ProductRepository productRepository){
        this.productRepository = productRepository;
    }
    public Product insert(Product product){
        product.setCreatedDate(LocalDateTime.now());
        return productRepository.save(product);
    }
    public Product update(Product product){
        Optional<Product> optionalProduct = productRepository
                .findById(product.getId());
        if(optionalProduct.isPresent()){
            return productRepository.save(product);
        }
        return null;
    }
    public List<Product> findAll()
    {
        return productRepository.findAll().stream()
                .filter(product -> product.isCancel()==false)
                .collect(Collectors.toList());
    }
    public Product getProductById(Long id) {
        Optional<Product> optional = productRepository.findById(id);
        return optional.orElse(null);
    }
    public Product getProductByName(String name) {
        return productRepository.findByName(name);
    }
    public Product delete (Long id) {
        Optional<Product> optional = productRepository.findById(id);
        if (optional.isPresent()) {
            Product foundProduct = optional.get();
            if (foundProduct.isActive() == true || foundProduct.isInactive() == true) {
                foundProduct.setStatus(ProductStatus.PRODUCT_CANCEL);
            }
            return productRepository.save(foundProduct);
        }
        return null;
    }


}

