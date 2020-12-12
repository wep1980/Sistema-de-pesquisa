package br.com.waldirep.sistemapesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.waldirep.sistemapesquisa.entiteis.Game;



@Repository
public interface GameRepository extends JpaRepository<Game, Long>{

}
