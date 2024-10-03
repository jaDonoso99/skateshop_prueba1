import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAlert } from '@ionic/react';
import { useState } from 'react';
import './Tab4.css';

const Tab4: React.FC<{ cart: any[], setCartItems: (items: any[]) => void }> = ({ cart, setCartItems }) => {
  const [showAlert, setShowAlert] = useState(false);

  // Función para calcular el total del carrito
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '').replace('.', '')), 0);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  // Función para "comprar" y vaciar el carrito
  const handlePurchase = () => {
    setShowAlert(true);  // Mostrar alerta
    setCartItems([]);    // Vaciar carrito después de la compra
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Carrito de Compras</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <strong>{item.name}</strong> - {item.price}
                  <IonButton color="danger" onClick={() => removeFromCart(index)}>
                    Eliminar
                  </IonButton>
                </li>
              ))}
            </ul>
            <div className="total">
              <p><strong>Total a pagar: </strong>${calculateTotal().toLocaleString('es-CL')}</p>
            </div>
            <IonButton expand="full" onClick={handlePurchase}>
              Comprar
            </IonButton>
          </>
        )}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Compra realizada'}
          message={'Gracias por tu compra. ¡El carrito ha sido vaciado!'}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
