package com.adas.store.service;

import com.adas.store.model.Produto;
import com.adas.store.model.Produto;
import com.adas.store.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Service
public class ProdutoService {

    @Autowired
    ProdutoRepository produtoRepository;

    public List<Produto> findAll(){
        return produtoRepository.findAll();
    }

    public Produto findById(Integer id){
        return produtoRepository.findById(id).orElse(null);
    }

    public Produto save(Produto produto){
        return produtoRepository.save(produto);
    }

    public void delete(Produto produto){
        produtoRepository.delete(produto);
    }


}
