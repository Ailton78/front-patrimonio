
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (

        <footer className="py-3 my-4 container">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
                <li className="nav-item"><Link to="/cadastro" className="nav-link px-2 text-muted">Cadastro</Link></li>
                <li className="nav-item"><Link to="/sobre" className="nav-link px-2 text-muted">Sobre</Link></li>
            </ul>
            <p className="text-center text-muted">&copy; 2022 Company, Black Foot</p>
        </footer>

    )
}

export default Footer