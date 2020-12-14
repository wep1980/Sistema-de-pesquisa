import React from 'react'; // Import para utilização do React
import './styles.css';
import { ReactComponent as Logo } from '../../assets/logo.svg'; // Tratando a imagem como componente e acessando a imagem da logo

const Header = () => (
    <header className="main-header">
        <Logo />
        <div className="logo-text">
            <span className="logo-text-1">Sistema De Busca</span>
            <span className="logo-text-2"> Pesquisa</span>

        </div>
    </header>
)

export default Header;