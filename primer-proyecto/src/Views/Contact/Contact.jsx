import Nav from '../../Components/Nav/Navbar'
import{ Link } from'react-router-dom';
import { Fragment } from 'react';
import './Contact.css';
export default function Contact() {
    return(
        <Fragment>
            <Nav itemMenu={"Contact"}/>
            <main className='w-100 vh-100 d-flex align-items-center justify-content-center'>
            <section className='fondo-contact'>
                <h2 className='titulo-prin'>Contact</h2>
                <h3 className='segundo-titulo'>Leave us your information so we can contact you Name </h3>
                <form className="row g-3" action='' method='post'>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name='name'/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name='email'/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea id='message' name='message' className='message'>
                    </textarea>
                </div>
    
                    <div className="boton">
                        <input type="submit" className="boton" value="Send"/>
                    </div>
                </form> 
            </section>           
            </main>

        </Fragment>
    )
}