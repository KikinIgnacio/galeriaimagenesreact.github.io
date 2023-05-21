import './App.css';
import Encabezado from './componentes/encabezado/Encabezado.jsx';
import Card from './componentes/card/Card.jsx';
import { foto1, foto2, foto3, foto4, foto5 } from "./assets/img";
import Footer from './componentes/footer';




function App() {
  return (
    <div className="App">
      <Encabezado principal="Mis Personajes Favoritos de Genshin Impact" />
      <Card link={foto1} titulo=" 🔱 Shenhe 🔱" descripcion="Personaje Cryo, 5 ⭐️. Usuaria de lanza" />
      <Card link={foto2} titulo="⚔️ Ayaka ⚔️" descripcion="Personaje Cryo, 5 ⭐️. Usuaria de espada" />
      <Card link={foto3} titulo="🌿 Alhacen 🌿" descripcion="Personaje Dendro, 5 ⭐️. Usuario de espada" />
      <Card link={foto4} titulo="❄️ Chongyun ❄️" descripcion="Personaje Cryo, 4 ⭐️. Usuario de mandoble" />
      <Card link={foto5} titulo=" 🍁 Kazuha 🍁" descripcion="Personaje Anemo, 5 ⭐️ Usuario de espada" />
      <Footer />
    </div>
  );
}

export default App;
