import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from'../Home/Home';
import Character from '../Characters/Characters';
import Contact from '../Contact/Contact';

export default function Router(){
    return(
        <BrowserRouter> 
            <Routes>
                <Route  path='/' element={<Home/>}/>
                <Route path='/characters' element={<Character/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>

    )
}