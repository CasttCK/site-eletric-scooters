import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import './Modal.styles.css';

const Modal = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  
  if (!product) return null;

  // Função para gerar o caminho da segunda imagem
  const getSecondImagePath = (originalPath) => {
    try {
      // Se a imagem foi importada via webpack, ela terá um formato específico
      if (typeof originalPath === 'string' && originalPath.startsWith('/static/media/')) {
        // Extrair o nome base do arquivo da URL webpack
        const baseName = originalPath.split('/').pop().split('.')[0];
        // Corrigindo o caminho para apontar para a pasta assets na raiz do src
        return require(`../../../assets/images/${baseName}_2.png`);
      } else {
        // Para imagens importadas diretamente
        return originalPath.replace('.png', '_2.png');
      }
    } catch (error) {
      console.warn('Segunda imagem não encontrada:', error);
      return originalPath; // Retorna a imagem original em caso de erro
    }
  };
  
  const images = [
    product.image,
    product.image2
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleComprar = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    onClose();
    navigate('/checkout');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}></button>
        
        <div className="image-carousel">
          <button className="carousel-button prev" onClick={prevImage}>‹</button>
          <img 
            src={images[currentImageIndex]} 
            alt={product.name} 
            className="modal-image"
          />
          <button className="carousel-button next" onClick={nextImage}>›</button>
        </div>

        <div className="modal-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          
          <div className="caracteristicas">
            <h3>Características:</h3>
            <ul>
              {product.caracteristicas.map((caracteristica, index) => (
                <li key={index}>{caracteristica}</li>
              ))}
            </ul>
          </div>
          
          <p className="price">R$ {product.price.toFixed(2)}</p>
          
          <div className="btn-comprar-container">
            <button className="btn-comprar" onClick={handleComprar}>
              Comprar agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal; 