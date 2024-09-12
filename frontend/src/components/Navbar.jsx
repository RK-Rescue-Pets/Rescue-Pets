import {Link} from 'react-router-dom'
function Navbar() {
    return ( 
        <nav>
            <Link to='/' id='nav-sec-1'>
                <p className="is-size-4">Logo</p>
            </Link>
            <div id='nav-sec-2'>
                <Link to='/animalbreed'>
                    <p>Breeds</p>
                </Link>
                <Link to='/'>
                    <p>Adoption Search</p>
                </Link>
                <Link to='/quiz'>
                    <p>Quiz</p>
                </Link>
            </div>
            <Link to='/saved' id='nav-sec-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#000000" d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>
            </Link>
        </nav>
    );
}

export default Navbar;