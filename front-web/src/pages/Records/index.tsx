import React, { useEffect, useState } from 'react';
import './styles.css'
import {RecordsResponse} from './types'
import { formatDate } from './helpers'

/* Instalado com */
import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

/**<thead> -> Cabeçalho da tabela
 * <tbody> -> Corpo do tabela
 * useState<RecordsResponse>() -> estado(interno) do componente tipado, armazena os valores
 */
const Records = () => {

   const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>();
   console.log(recordsResponse);

   /**
    * Fazendo integração com API
    *  useEffect(() -> E um ciclo de vida do componente
    *  <tr key={record.id}> -> Dentro do ReactJS todo componente de lista tem que ter um key
    */
   useEffect(() => {
      axios.get(`${BASE_URL}/records?linesPerPage=12`).then(response => setRecordsResponse(response.data));
      console.log('Componente iniciado');
   }, []);

   return (
      <div className="page-container">
         <table className="records-table" cellPadding="0" cellSpacing="0">
            <thead>
               <tr>
                  <th>INSTANTE</th>
                  <th>NOME</th>
                  <th>IDADE</th>
                  <th>PLATAFORMA</th>
                  <th>GÊNERO</th>
                  <th>TÍTULO DO GAME</th>
               </tr>
            </thead>

            <tbody>
               {recordsResponse?.content.map(record => (
                  <tr key={record.id}>
                     <td>{formatDate(record.moment)}</td>
                     <td>{record.name}</td>
                     <td>{record.age}</td>
                     <td className="text-secondary">{record.gamePlatform}</td>
                     <td>{record.genreName}</td>
                     <td className="text-primary">{record.gameTitle}</td>
                  </tr>
               ))}
            </tbody>
         </table>
   
      </div>
   );
}

export default Records;