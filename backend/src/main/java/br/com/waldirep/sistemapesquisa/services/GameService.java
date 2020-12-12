package br.com.waldirep.sistemapesquisa.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.waldirep.sistemapesquisa.dto.GameDTO;
import br.com.waldirep.sistemapesquisa.entiteis.Game;
import br.com.waldirep.sistemapesquisa.repositories.GameRepository;

@Service
public class GameService {
	
	
	@Autowired
	private GameRepository gameRepository;
	
	
	
	@Transactional(readOnly = true) // Evita o locking no banco de dados -- Nivel de operação baixo, somente leitura
	public List<GameDTO> findAll(){
		
		List<Game> list = gameRepository.findAll();
		
		// Transformando o a list para uma lista de GameDTO e depois transforma para list
		return list.stream().map(x -> new GameDTO()).collect(Collectors.toList());
	}

}
