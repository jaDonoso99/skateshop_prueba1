import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cart, storefront, star, earth } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';  // Importa Tab4
import React, { useState } from 'react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);  // Estado del carrito en el nivel superior

  // Función para agregar elementos al carrito
  const addToCart = (item: any) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tab2">
              {/* Pasamos el carrito y la función de añadir al carrito */}
              <Tab2 cart={cartItems} addToCart={addToCart} />
            </Route>
            <Route path="/tab3">
              <Tab3 />
            </Route>
            <Route exact path="/tab4">
              {/* Pasamos el carrito como prop a Tab4 */}
              <Tab4 cart={cartItems} setCartItems={setCartItems} />
            </Route>
            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon aria-hidden="true" icon={star} />
              <IonLabel>Destacado</IonLabel>
            </IonTabButton>

            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon aria-hidden="true" icon={storefront} />
              <IonLabel>Productos</IonLabel>
            </IonTabButton>

            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon aria-hidden="true" icon={earth} />
              <IonLabel>Comunidad</IonLabel>
            </IonTabButton>

            <IonTabButton tab="tab4" href="/tab4">
              <IonIcon aria-hidden="true" icon={cart} />
              <IonLabel>Carrito</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
