import './Home.css';
import{ Link } from'react-router-dom';

export default function Home() {
   
    return(
        <div className="csshome">
            <style>
 
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');
</style>    
            <h1 className='h1'>Proyect Rick & Morty</h1>
            <h2 className='h2'>Helcome to Rick & Morty Proyect!</h2>
            
             
            <p className='p'>This proyect was made for practising React and to made a functional website <br></br>

            In this website you can know information of the characters of this animated series.<br></br>
            Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion <br></br>
            </p>

            <h3 className='h3'>Lets go!</h3>
           <section className='button'>
           <Link to="/characters" className='btn  p-2 me-2'>Charactes</Link>
            <Link to="/contact" className='btn  p-2 me-2'>Contact</Link>      
            </section>
            </div>
    )
}

