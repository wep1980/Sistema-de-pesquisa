package br.com.waldirep.sistemapesquisa.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.waldirep.sistemapesquisa.dto.RecordDTO;
import br.com.waldirep.sistemapesquisa.dto.RecordInsertDTO;
import br.com.waldirep.sistemapesquisa.entiteis.Game;
import br.com.waldirep.sistemapesquisa.entiteis.Record;
import br.com.waldirep.sistemapesquisa.repositories.GameRepository;
import br.com.waldirep.sistemapesquisa.repositories.RecordRepository;

@Service
public class RecordService {
	
	
	@Autowired
	private RecordRepository recordRepository;
	
	@Autowired
	private GameRepository gameRepository;
	
	
	
	@Transactional
	public RecordDTO insert(RecordInsertDTO dto) {
		
		Record entity = new Record();
		
		entity.setName(dto.getName());
		entity.setAge(dto.getAge());
		entity.setMoment(Instant.now());
		
		/*
		 * Pegando a referencia para o game com id que foi capturado no dto.
		 * E instanciado um game, para inserir um record e necessario passar um game completo(Uma referencia para o game)
		 * getOne(dto.getGameId()) -> Instancia um objeto relacionado do tipo necessario, sem acessar o banco de dados - Instancia o objeto monitorado
		 */
		Game game = gameRepository.getOne(dto.getGameId());
		entity.setGame(game);
		
		entity = recordRepository.save(entity); // Salvando no proprio entity temos uma refenecia atualizada
		
		return new RecordDTO(entity);
	}

}
