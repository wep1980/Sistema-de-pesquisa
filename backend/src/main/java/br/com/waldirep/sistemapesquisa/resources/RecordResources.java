package br.com.waldirep.sistemapesquisa.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.waldirep.sistemapesquisa.dto.RecordDTO;
import br.com.waldirep.sistemapesquisa.dto.RecordInsertDTO;
import br.com.waldirep.sistemapesquisa.services.RecordService;

@RestController
@RequestMapping(value = "/records")
public class RecordResources {
	
	@Autowired
	private RecordService recordService;
	
	
	
	
	@PostMapping()
	public ResponseEntity<RecordDTO> insert(@RequestBody RecordInsertDTO dto) {
		
		RecordDTO newDTO = recordService.insert(dto);
		return ResponseEntity.ok().body(newDTO);
	
	}

}
