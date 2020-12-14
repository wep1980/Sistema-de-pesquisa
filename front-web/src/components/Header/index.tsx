import React from 'react'; // Import para utilização do React
import './styles.css';

// Componente para conversar com as rotas definidas em Routes.tsx
import { Link } from 'react-router-dom'; 

// Tratando a imagem como componente e acessando a imagem da logo
import { ReactComponent as Logo } from '../../assets/logo.svg'; 

const Header = () => (
    <header className="main-header">
        <Logo />
        <Link to="/">
        <div className="logo-text">
            <span className="logo-text-1">Sistema De Busca</span>
            <span className="logo-text-2"> Pesquisa</span>
        </div>
        </Link>
    </header>
)

export default Header;