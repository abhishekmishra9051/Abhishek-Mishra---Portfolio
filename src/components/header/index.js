import './index.scss'
import Logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header({headerTitle='Reebok Store', headerText='Welcome to the reebook store', activePage="home"}) {

    const [showMenu, setShowMenu] =useState(false)
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary py-3">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        <img src={Logo} alt="Reebok"  height="40" />
                    </Link>
                    <button onClick={() => {
                        setShowMenu(prevState => !prevState)
                        //let navigationMenu = document.getElementById('navigationMenu')
                    }} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class={`collapse navbar-collapse text-center ${showMenu && "show"}`} >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto my-0">
                            <li class="nav-item">
                                <Link class={`nav-link ${activePage === 'home' && 'active'}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class={`nav-link ${activePage === 'about' && 'active'}`} to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class={`nav-link ${activePage === 'product' && 'active'}`} to="/product">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class={`nav-link ${activePage === 'contact' && 'active'}`} to="/contact">Contact</Link>
                            </li> 
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </nav>
            <div className='bg-secondary text-white'>
                <div className='container p-5'>
                    <h1>{headerTitle}</h1> 
                    <p>{headerText}</p>
                </div>
                
            </div>
        </header>
    )
}