import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, IonButton, IonAvatar, IonIcon } from '@ionic/react';
import { starOutline, star } from 'ionicons/icons'; // Para calificación
import './Tab3.css';

const Tab3: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  // Datos simulados para la búsqueda y las publicaciones
  const products = [
    { id: 1, name: 'Trucks thunder 149, semi nuevos', price: '$30.000', seller: 'María López', description: 'Trucks semi nuevos un poco patinados pero no se nota, detalles al DM', phone: '+56 955555678' },
    { id: 2, name: 'Ruedas kfiolos, nuevas', price: '$8.000', seller: 'Victor Morly', description: 'Estan como nuevas, Mas fotos y detalles al DM!!!', phone: '+56 982207393' }

  ];

  const communityPosts = [
    { id: 1, user: '@steban_sb', image: '/img/c1.jpg', type: 'image' },
    { id: 2, user: '@karassu', image: '/img/c2.jpg', type: 'image' },
    { id: 2, user: '@Luanoliveira', image: '/img/c3.jpg', type: 'image' },
    { id: 2, user: '@Lalo_sb', image: '/img/c4.jpg', type: 'video' }
  ];

  const sellerProfile = {
    name: 'Javier Donoso',
    phone: '+569 83007283',
    profilePicture: '/img/team2.jpg',
    rating: 4.5,
    reviews: 20
  };

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

  // Función para mostrar estrellas de calificación
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <IonIcon key={i} icon={i < rating ? star : starOutline} />
      );
    }
    return stars;
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Comunidad - Compra y venta</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Barra de búsqueda */}
        <IonSearchbar value={searchText} onIonInput={(e: any) => setSearchText(e.detail.value!)} placeholder="Buscar productos o artículos" />

        {/* Sección 1: Artículos en Venta */}
        <div className="section">
          <h2>Mercado de la Comunidad</h2>
          <IonList>
            {filteredProducts.map(product => (
              <IonItem key={product.id} className="product-item">

                <img src={`/img/u1.png`} alt={product.name} className="product-image" />   {/* IMAGENES PARA LA VENTA DE PRODUCTOS */}

                <IonLabel>
                  <h2>{product.name}</h2>
                  <p>{product.price}</p>
                </IonLabel>
                <IonButton onClick={() => alert(`Vendedor: ${product.seller}\nDescripción: ${product.description}\nTeléfono: ${product.phone}\nPrecio: ${product.price}`)}>
                  Ver más
                </IonButton>
              </IonItem>
            ))}
          </IonList>
        </div>

        {/* Sección 2: Comunidad */}
        <div className="section">
          <h2>Publicaciones de la Comunidad</h2>
          <IonList>
            {communityPosts.map(post => (
              <IonItem key={post.id} className="community-item">
                <img src={post.image} alt={`Publicado por ${post.user}`} className="community-image" />
                <IonLabel>
                  <h2>subido por {post.user}</h2>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </div>

        {/* Sección 3: Información del perfil */}
        <div className="section">
          <h2>Perfil de Vendedor</h2>
          <IonItem className="profile-item">
            <IonAvatar slot="start">
              <img src={sellerProfile.profilePicture} alt={sellerProfile.name} />
            </IonAvatar>
            <IonLabel>
              <h2>{sellerProfile.name}</h2>
              <p>Teléfono: {sellerProfile.phone}</p>
              <p>Calificación: {renderStars(sellerProfile.rating)} ({sellerProfile.reviews} opiniones)</p>
            </IonLabel>
          </IonItem>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
