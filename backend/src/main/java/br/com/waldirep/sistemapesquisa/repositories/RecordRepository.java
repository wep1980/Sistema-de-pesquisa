package br.com.waldirep.sistemapesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.waldirep.sistemapesquisa.entiteis.Record;

public interface RecordRepository extends JpaRepository<Record, Long>{

}
