import React from 'react';
import './styles.css';

/**
 * Componente de paginação da Pagina.
 * totalPages?: -> É colocado como opicional pq antes de a APi carregar ainda não existe 
 * o valor de total de paginas.
 *  goToPage() -> Metodo que ao clicar no botão de pagina busca a pagina selecionada
 * {item + 1} -> como o index começa do 0 e para não aparecer a pagina zero para o usuario e semado + 1
 */

type Props = {
    totalPages?: number;

    goToPage: Function;
    activePage: number; // Avisa a pagina ativa
}

const Pagination = ({ totalPages = 0, goToPage, activePage }: Props) => {
    const paginationItems = Array.from(Array(totalPages).keys());
    return (
        <div className="pagination-container">
            {paginationItems.map(item => (
                <button 
                   key={item}
                   className={`pagination-item ${activePage === item ? 'active' : 'inactive'}`}
                   onClick={() => goToPage(item)}
                   >
                    {item + 1}
                </button>
            ))}

        </div>
    )
}

export default Pagination;