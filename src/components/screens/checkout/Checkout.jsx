import React from "react";
import { useCart } from '../../../context/CartContext';
import './checkout.styles.css';

function Checkout() {
    const { cartItems, removeFromCart } = useCart();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <div className="checkout-container">
            <div className="cart-section">
                <h2>Meu carrinho ({cartItems.length} itens)</h2>
                
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="item-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <button 
                                    className="remove-button"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remover
                                </button>
                            </div>
                            <div className="item-price">
                                R$ {item.price.toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="cart-summary">
                <h3>Resumo do carrinho</h3>
                <div className="summary-items">
                    <div className="summary-row">
                        <span>Itens ({cartItems.length})</span>
                        <span>R$ {calculateTotal().toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Desconto</span>
                        <span>-</span>
                    </div>
                    <div className="summary-row total">
                        <span>Total a pagar</span>
                        <span>R$ {calculateTotal().toFixed(2)}</span>
                    </div>
                </div>
                <button className="continue-button">
                    Continuar compra →
                </button>
                <div className="secure-purchase">
                    <span>🔒 Compra segura e protegida</span>
                </div>
            </div>
        </div>
    );
}

export default Checkout;