import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './home.styles.css';
import logoLiveMotors from '../assets/images/logo_live_motors.png';
import bannerImage from '../assets/images/banner.png';
import x11Image from '../assets/images/x11.png';
import harleyImage from '../assets/images/harley.png';
import bikeImage from '../assets/images/bike.png';

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -23.011234522916627,
  lng: -43.46124795963062
};

const locations = [
  {
    name: "Live Motors Americas Shopping",
    position: { lat: -23.011234522916627, lng: -43.46124795963062 },
    address: "Av. das Américas, 15500 - Recreio dos Bandeirantes",
    phone: "(21) 97511-5030"
  }
];

function MinhaTelaInicial() {
  const handleComoChegar = (endereco) => {
    const enderecoFormatado = encodeURIComponent(endereco);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${enderecoFormatado}`, '_blank');
  };

  const mapOptions = {
    styles: [{ featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] }],
    mapTypeControl: false,
    streetViewControl: true,
    fullscreenControl: true,
  };

  return (
    <div className="watts-container">
      <header className="watts-header">
        <nav className="nav-principal">
          <div className="logo">
            <img src={logoLiveMotors} alt="Live Motors" />
          </div>
          <div className="menu-principal">
            <ul>
              <li className="menu-dropdown">
                <span>Veículos</span>
                <div className="submenu">
                  <a href="/motos-eletricas">Motos elétricas</a>
                  <a href="/scooters-eletricas">Scooters elétricas</a>
                </div>
              </li>
              <li><a href="/quem-somos">Quem somos</a></li>
              <li className="menu-dropdown">
                <span>Revenda</span>
                <div className="submenu">
                  <a href="/encontre-revendedor">Encontre um revendedor</a>
                  <a href="/seja-revendedor">Seja um revendedor</a>
                </div>
              </li>
              <li><a href="/contato">Fale conosco</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="banner-principal">
        <div className="banner-image">
          <img src={bannerImage} alt="Banner Live Motors" />
        </div>
        <div className="banner-content">
          <h2>Mobilidade Elétrica</h2>
          <p>Descubra o futuro da mobilidade com nossas motos elétricas</p>
          <button className="btn-banner">Conheça todos os modelos</button>
        </div>
      </section>

      <section className="modelos-section">
        <div className="content-wrapper">
          <h2 className="modelos-title">Mais vendidos</h2>
          <div className="modelos-grid">
            <div className="modelo-card">
              <div className="modelo-image">
                <img src={x11Image} alt="Modelo X11" />
              </div>
              <div className="modelo-info">
                <h3>X11</h3>
                <p>A moto elétrica mais potente da categoria</p>
                <button className="btn-modelo">Ver detalhes</button>
              </div>
            </div>

            <div className="modelo-card">
              <div className="modelo-image">
                <img src={harleyImage} alt="Modelo Harley" />
              </div>
              <div className="modelo-info">
                <h3>Harley</h3>
                <p>Design clássico com tecnologia moderna</p>
                <button className="btn-modelo">Ver detalhes</button>
              </div>
            </div>

            <div className="modelo-card">
              <div className="modelo-image">
                <img src={bikeImage} alt="Modelo Bike" />
              </div>
              <div className="modelo-info">
                <h3>Bike</h3>
                <p>Mobilidade urbana com estilo e eficiência</p>
                <button className="btn-modelo">Ver detalhes</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="content-wrapper">
        <section className="lojas-section">
          <h2 className="lojas-title">Nossas Lojas</h2>
          
          <div className="lojas-container">
            <div className="lojas-info">
              {locations.map((loja, index) => (
                <div key={index} className="loja-card">
                  <h3>{loja.name}</h3>
                  <p><i className="fas fa-map-marker-alt"></i> {loja.address}</p>
                  <p><i className="fas fa-phone"></i> {loja.phone}</p>
                  <button 
                    className="btn-rota" 
                    onClick={() => handleComoChegar(loja.address)}
                  >
                    Como chegar
                  </button>
                </div>
              ))}
            </div>

            <div className="mapa-container">
              <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={15}
                  options={mapOptions}
                >
                  {locations.map((loja, index) => (
                    <Marker
                      key={index}
                      position={loja.position}
                      title={loja.name}
                    />
                  ))}
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </section>
      </main>

      <footer className="watts-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Institucional</h3>
            <ul>
              <li><a href="/quem-somos">Quem somos</a></li>
              <li><a href="/encontre-revendedor">Encontre um revendedor</a></li>
              <li><a href="/seja-revendedor">Seja um revendedor</a></li>
              <li><a href="/contato">Fale conosco</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Suporte para Pós-Venda</h3>
            <p>Atendimento ao consumidor: (11) 3198-5812</p>
            <p>E-mail: rma.mobilidade@grupomulti.com.br</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MinhaTelaInicial;