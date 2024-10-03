import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useState, useEffect } from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const products = [
    { name: 'Tabla Primitive - Hongos "8.38" + Lija Blank', price: '$29.000', image: '/img/productos/hongoprimitive.jpg' },
    { name: 'Poleron Primitive', price: '$29.000', image: '/img/productos/poleronprimitive.png' },
    { name: 'Ruedas Bones - STF Iron Sun - 54mm', price: '$19.990', image: '/img/productos/bones1.png' },
    { name: 'Gorro Erased', price: '$9.990', image: '/img/productos/erasedgorro.png' },
    { name: 'Trucks Thunder - Titanium 3 Polished - 149', price: '$69.000', image: '/img/productos/Thunder1.png' },
  ];

  const userItems = [
    { name: '@Karasuu New post!', price: 'publicacion', image: '/img/c2.jpg' },
    { name: 'Ruedas kfiolos, nuevas', price: '$8.000', image: '/img/u1.png' },
    { name: 'Trucks thunder 149, semi nuevos', price: '$30.000', image: '/img/u3.jpg' },
    { name: '@steban_sb New post!', price: 'publicacion', image: '/img/c1.jpg' },
  ];

  const images = ['/img/S1.jpg', '/img/S2.jpg', '/img/S3.jpg', '/img/S4.jpg'];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <IonPage>

<IonHeader>
  <IonToolbar color="primary">
    <div className="header-content">
      <img src="/img/zero.png" alt="Logo" className="header-logo" /> {/* Logo pequeño */}
      <IonTitle className="custom-header">KISAZO! Skateshop</IonTitle>
    </div>
  </IonToolbar>
</IonHeader>



      <IonContent fullscreen>
        {/* Sección 1: Imágenes con animación */}
        <section className="image-slider">
          <h2>Una Tienda especializada para la Comunidad!</h2>
          <div className="slider">
            <img src={images[currentImage]} alt="Imagen deslizable" />
          </div>
        </section>

        {/* Sección 2: Productos destacados */}
        <section className="featured-products">
          <h2>Productos Destacados</h2>
          <div className="product-row">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <img src={product.image} alt={product.name} />
                <p><strong>{product.name}</strong></p>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
          <IonButton expand="block" color="secondary" routerLink="/tab2">
            Ver todos los Productos
          </IonButton>
        </section>


        {/* Imagen adicional */}
        <section className="mid-section-image">
          <img src="/img/img4.jpg" alt="Imagen adicional" />
        </section>

        {/* Sección 3: Artículos subidos por los usuarios */}
        <section className="user-items">
          <h2>Únete a nuestra COMUNIDAD! Comprar, vende y publica tus productos...</h2>
          <div className="product-row">
            {userItems.map((item, index) => (
              <div key={index} className="product-card">
                <img src={item.image} alt={item.name} />
                <p><strong>{item.name}</strong></p>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
          <IonButton expand="block" color="tertiary" routerLink="/tab3">
            ¡Ver Comunidad!
          </IonButton>
        </section>

        {/* Sección 4: Imagen simple */}
        <section className="simple-image">
          <h2>Nuestro equipo</h2>
          <img src="/img/team1.jpg" alt="Nuestra comunidad" />
        </section>

        {/* Sección 5: Contacto */}
        <section className="contact-info">
          <h2>Contacto</h2>
          <p>Dirección: Av. Tusca 611 </p>
          <p>Email: kisazoskate@gmail.com</p>
          <p>Síguenos en nuestras redes sociales:</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
