package br.com.waldirep.sistemapesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.waldirep.sistemapesquisa.entiteis.Game;

public interface GameRepository extends JpaRepository<Game, Long>{

}
