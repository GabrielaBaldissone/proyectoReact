import NavBar from './components/layouts/navbar/NavBar';
import ItemListContainer from './components/pages/itemListContainer/ItemListContainer';

function App() {

  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea! Estamos encantados de que estés aquí." />
      </div>
    </>
  );

}

export default App;
