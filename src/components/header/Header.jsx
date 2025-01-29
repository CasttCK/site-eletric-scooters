import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Header.styles.css';
import logoLiveMotors from '../../assets/images/logo_live_motors.png';

function Header() {
    const { cartItems } = useCart();

    return (
        <header className="watts-header">
            <nav className="nav-principal">
                <div className="logo">
                    <Link to="/">
                        <img src={logoLiveMotors} alt="Live Motors" />
                    </Link>
                </div>
                <div className="menu-principal">
                    <ul>
                        <li className="menu-dropdown">
                            <span>Veículos</span>
                            <div className="submenu">
                                <Link to="/motos-eletricas">Motos elétricas</Link>
                                <Link to="/scooters-eletricas">Scooters elétricas</Link>
                            </div>
                        </li>
                        <li><Link to="/quem-somos">Quem somos</Link></li>
                        <li className="menu-dropdown">
                            <span>Revenda</span>
                            <div className="submenu">
                                <Link to="/encontre-revendedor">Encontre um revendedor</Link>
                                <Link to="/seja-revendedor">Seja um revendedor</Link>
                            </div>
                        </li>
                        <li><Link to="/contato">Fale conosco</Link></li>
                        <li className="nav-icons">
                            <Link to="/checkout" className="icon-button cart-icon">
                                <i className="fas fa-shopping-cart"></i>
                                {cartItems.length > 0 && (
                                    <span className="cart-count">{cartItems.length}</span>
                                )}
                            </Link>
                            <Link to="/perfil" className="icon-button">
                                <i className="fas fa-user"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header; 