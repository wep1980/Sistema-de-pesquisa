package br.com.waldirep.sistemapesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.waldirep.sistemapesquisa.entiteis.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long>{

}
