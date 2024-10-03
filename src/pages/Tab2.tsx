import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC<{ cart: any[], addToCart: (item: any) => void }> = ({ cart, addToCart }) => {

  const categories = {
    Tablas: [
      { name: 'Tabla Primitive - 2pac "8.125" + Lija Blank', price: '$29.000', image: '/img/productos/2pacprimitive.jpg' },
      { name: 'Tabla Primitive - Hongos "8.38" + Lija Blank', price: '$29.000', image: '/img/productos/hongoprimitive.jpg' },
      { name: 'Tabla Primitive - Huesos "8.5" + Lija Blank', price: '$29.000', image: '/img/productos/huesosprimitive.jpg' },
      { name: 'Tabla Primitive - Shingeki no kioyin "8.25" + Lija Blank', price: '$29.000', image: '/img/productos/snkprimitive.jpg' },
      { name: 'Tabla Primitive - Angel "8.38" + Lija Blank', price: '$29.000', image: '/img/productos/angelprimitive.jpg' },
    ],
    Ropa: [
      { name: 'Poleron Primitive', price: '$29.000', image: '/img/productos/poleronprimitive.png' },
      { name: 'Polera Hokey', price: '$15.000', image: '/img/productos/hokeypolera.jpg' },
      { name: 'Gorro Erased', price: '$9.990', image: '/img/productos/erasedgorro.png' },
      { name: 'Poleron Erased', price: '$29.000', image: '/img/productos/erasedpoleron.png' },
      { name: 'Polera Erased', price: '$15.000', image: '/img/productos/erasedpolera.jpg' },
      { name: 'Polera Primitive', price: '$15.000', image: '/img/productos/poleraprimitive.png' },
    ],
    Trucks: [
      { name: 'Trucks Thunder - Titanium 3 Polished - 149', price: '$69.000', image: '/img/productos/Thunder1.png' },
      { name: 'Thunder rebuild kit 100A', price: '$9.990', image: '/img/productos/gomasthunder.png' },
      { name: 'Trucks Thunder - Hollow night II - 147', price: '$69.000', image: '/img/productos/thunder4.png' },
      { name: 'Trucks Thunder - Hollow Lights OG Grenade grey 148', price: '$69.000', image: '/img/productos/thunder2.png' },
      { name: 'Trucks Thunder - Hollow Lights Polished II 151', price: '$69.000', image: '/img/productos/thunder3.png' },
    ],
    Ruedas: [
      { name: 'Ruedas Bones - STF Iron Sun - 54mm', price: '$19.990', image: '/img/productos/bones1.png' },
      { name: 'Ruedas Bones - STF Trevor McClung McCherubs - 54mm', price: '$19.990', image: '/img/productos/bones2.png' },
      { name: 'Ruedas Bones - STF Collins Ferk - 52mm', price: '$19.990', image: '/img/productos/bones3.png' },
      { name: 'Ruedas Bones - STF Boo Just Have Fun V6 - 54mm', price: '$19.990', image: '/img/productos/bones4.png' },
      { name: 'Ruedas Bones - STF Hart Gator Skull - 53mm', price: '$19.990', image: '/img/productos/bones5.png' },
    ],
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Productos en Venta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        {Object.entries(categories).map(([category, products], index) => (
          <div key={index} className="category-section">
            <h2>{category}</h2>
            <div className="product-row">
              {products.map((product: any, idx: number) => (
                <div key={idx} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <div className="product-info">
                    <p><strong>{product.name}</strong></p>
                    <p>{product.price}</p>
                    {/* Botón para añadir al carrito */}
                    <IonButton onClick={() => addToCart(product)}>Añadir al carrito</IonButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
