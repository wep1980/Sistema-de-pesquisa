package br.com.waldirep.sistemapesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.waldirep.sistemapesquisa.entiteis.Genre;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Long>{

}
