import { useState } from "react";
// Importerer produkter fra en ekstern fil
import { products } from "./assets/legodudes";

// Importerer komponenter som brukes i appen
import Cart from "./components/Cart";

import Header from "./components/Header";

import PageContent from "./components/PageContent";

// Importerer stilfilen for appen
import "./styles/style.css";

// Definerer hovedkomponenten App
function App() {
  const [cartCount, setCartCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [cart, setCart] = useState([]);
  return (
    <div id="content">
      {/* Legger til handlevogn-komponenten */}
      <Cart toggle={toggle} cart={cart} />
      {/* Overskrift-seksjon med logo og handlekurvknapp */}
      <Header cartCount={cartCount} setToggle={setToggle} toggle={toggle} />
      <PageContent
        products={products}
        setCartCount={setCartCount}
        cart={cart}
        setCart={setCart}
      />

      {/* Footer-seksjon */}
      <footer>
        <p>2025 &copy; Legodudes</p>
      </footer>
    </div>
  );
}

// Eksporterer App-komponenten for bruk i applikasjonen
export default App;