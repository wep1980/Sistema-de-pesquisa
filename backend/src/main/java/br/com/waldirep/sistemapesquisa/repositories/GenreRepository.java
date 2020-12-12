package br.com.waldirep.sistemapesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.waldirep.sistemapesquisa.entiteis.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long>{

}
