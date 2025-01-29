import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.styles.css';
import defaultAvatar from '../../../assets/images/default-avatar.png';


function Profile() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        login: 'karyna@shoop.com.br',
        name: 'GISELE',
        phone: '(21) 3215-8788',
        cellphone: '(21) 98464-8888',
        birthDate: '04/09/2019',
        type: 'NÃO É PRESTADOR'
    });

    const handleSave = (e) => {
        e.preventDefault();
        // Implementar lógica de salvamento
        alert('Dados salvos com sucesso!');
        navigate('/');
    };

    return (
        <div className="profile-page">
            <div className="profile-container">
                <h2 style={{color: '#727577'}}>Meu Perfil</h2>
                
                <div className="profile-tabs">
                    <button className="tab-button active">Dados do Usuário</button>
                </div>

                <div className="profile-content">
                    <div className="avatar-section">
                        <img src={defaultAvatar} alt="Foto do perfil" className="profile-avatar" />
                    </div>

                    <form className="profile-form" onSubmit={handleSave}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Login*</label>
                                <input 
                                    type="email" 
                                    value={userData.login} 
                                    readOnly 
                                />
                            </div>
                            <div className="form-group">
                                <button type="button" className="change-password-btn">
                                    Alterar senha
                                </button>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Nome*</label>
                                <input 
                                    type="text" 
                                    value={userData.name}
                                    onChange={(e) => setUserData({...userData, name: e.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <label>Data de Nascimento</label>
                                <input 
                                    type="text" 
                                    value={userData.birthDate}
                                    onChange={(e) => setUserData({...userData, birthDate: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Telefone</label>
                                <input 
                                    type="text" 
                                    value={userData.phone}
                                    onChange={(e) => setUserData({...userData, phone: e.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <label>Celular</label>
                                <input 
                                    type="text" 
                                    value={userData.cellphone}
                                    onChange={(e) => setUserData({...userData, cellphone: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Prestador</label>
                                <select 
                                    value={userData.type}
                                    onChange={(e) => setUserData({...userData, type: e.target.value})}
                                >
                                    <option value="NÃO É PRESTADOR">NÃO É PRESTADOR</option>
                                    <option value="PRESTADOR">PRESTADOR</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-actions">
                            <button type="submit" className="save-button">
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile; 