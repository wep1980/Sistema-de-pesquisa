package br.com.waldirep.sistemapesquisa.repositories;

import java.time.Instant;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.waldirep.sistemapesquisa.entiteis.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long>{

	/*
	 * (:min IS NULL OR obj.moment >= :min) Se o campo min for null  a condição e verdadeira -> 
	 * @Query("SELECT obj FROM Record obj WHERE (:min IS NULL OR obj.moment >= :min) AND (:max IS NULL OR obj.moment <= :max)") -- PARA TESTAR NO POSTMAN
	 * (coalesce(:min, null) -> Para funcionar no Banco de dados Postgresql
	 */
	@Query("SELECT obj FROM Record obj WHERE "
			+ "(coalesce(:min, null) IS NULL OR obj.moment >= :min) AND "
			+ "(coalesce(:max, null) IS NULL OR obj.moment <= :max)")
	Page<Record> findByMoments(Instant min, Instant max, Pageable pageable);

}
