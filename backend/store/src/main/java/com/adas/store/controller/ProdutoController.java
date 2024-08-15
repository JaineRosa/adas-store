package com.adas.store.controller;

import com.adas.store.model.Produto;
import com.adas.store.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produto")
public class ProdutoController {

    @Autowired
    ProdutoService produtoService;

    @GetMapping
    public ResponseEntity<List<Produto>> findAll(){
        return ResponseEntity.ok(produtoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> findById(@PathVariable Integer id){
        return  ResponseEntity.ok(produtoService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Produto> create(@RequestBody Produto produto){
        return ResponseEntity.ok(produtoService.save(produto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Produto> update(@RequestBody Produto produto){
        return ResponseEntity.ok(produtoService.save(produto));
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<Produto> delete(@PathVariable Integer id){
        Produto produto = produtoService.findById(id);
        produtoService.delete(produto);
        return ResponseEntity.ok(produto);
    }

}
