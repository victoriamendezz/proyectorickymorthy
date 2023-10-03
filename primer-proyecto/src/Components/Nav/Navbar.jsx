import './Navbar.css'
import {Link} from 'react-router-dom';
export default function Nav({itemMenu}) {
    


    return(
        <nav className="navbar backgroundColor textColor">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 ">
              <h1 className="titulo">
                Rick & Morty</h1>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled">

                <li className='ul-li'>
                <Link to="/characters" className={itemMenu ==="Characters"?' btn pepe text-white text-decoration-none':'btn text-white text-decoration-none'}>Characters</Link>
                </li>
                <li className='ul-li'>
                <Link to="/contact" className={'btn text-white text-decoration-none'+ (itemMenu === "Contact"?" pepe":"")}>Contact</Link>
                  </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
    