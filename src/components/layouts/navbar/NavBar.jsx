import ButtonComponent from './ButtonComponent';
import CartWidget from '../../common/cartWidget/CartWidget';

const navBarStyle = {
    padding: '20px', display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

export default function NavBar() {
    return (
    <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={navBarStyle} >
             <h3>Librarium </h3>   
            <ButtonComponent texto="Inicio" />
            <ButtonComponent texto="Novedades" />
            <ButtonComponent texto="Genéros" />
            <ButtonComponent texto="Sobre Nosotros" />
            <ButtonComponent texto="Contacto" />
             <h4><CartWidget /> Carrito</h4>
            </nav>
        
       
    </div>
    );
}
