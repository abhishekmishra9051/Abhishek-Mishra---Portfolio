import './index.scss'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <footer className='bg-dark text-light' >

            <div className='container-fluid pt-3'>
                <div className='row'>
                    <div className='col-6'>
                       <p>&copy; Copyright {new Date().getFullYear()}, All Right Reserved. </p>
                    </div>
                    <div className='col-6 text-end'>
                   
                                <Link class="nav-link d-inline-block" aria-current="page" to="/">Home</Link>
                            
                                <Link class="nav-link d-inline-block ms-2" to="/about">About</Link>
                          
                                <Link class="nav-link d-inline-block ms-2" to="/product">Products</Link>
                            
                                <Link class="nav-link d-inline-block ms-2" to="/contact">Contact</Link>
                            
                    </div>
                </div>
            </div>

        </footer>
    )
}