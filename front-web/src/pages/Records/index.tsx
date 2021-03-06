import React, { useEffect, useState } from 'react';
import './styles.css'
import {RecordsResponse} from './types';
import { formatDate } from './helpers';
import Pagination from './Pagination';
import Filters from '../../components/Filters';

/* Instalado com */
import axios from 'axios';

const BASE_URL = 'https://wepdev-sistema-pedidos.herokuapp.com';

/**<thead> -> Cabeçalho da tabela
 * <tbody> -> Corpo do tabela
 * useState<RecordsResponse>() -> estado(interno) do componente tipado, armazena os valores
 */
const Records = () => {

   const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>();
   const [activePage, setActivePage] = useState(0);

   /**
    * Fazendo integração com API
    *  useEffect(() -> E um ciclo de vida do componente
    *  <tr key={record.id}> -> Dentro do ReactJS todo componente de lista tem que ter um key
    */
   useEffect(() => {
      axios.get(`${BASE_URL}/records?linesPerPage=12&page=${activePage}`).then(response => setRecordsResponse(response.data));
      console.log('Componente iniciado');
   }, [activePage]);


   /**
    * 
    * @param index Metodo que altera a pagina
    */
   const handlePageChange = (index: number) => {
        setActivePage(index)
   }

   return (
      <div className="page-container">
        <Filters link="/charts" linkText="VER GRÁFICO"></Filters>
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
         <Pagination 
             activePage={activePage}
             goToPage={handlePageChange}
             totalPages={recordsResponse?.totalPages}/>
      </div>
   );
}

export default Records;