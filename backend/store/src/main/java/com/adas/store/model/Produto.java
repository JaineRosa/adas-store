package com.adas.store.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor @NoArgsConstructor @Data @Builder
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer Id;

    private String nome;
    private Integer preco;
    private Integer quantidade;


    @ManyToOne
    @JoinColumn(name="categoria_id")
    private Categoria categoria;
    }
