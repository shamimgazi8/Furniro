import React from 'react';
const collections = [
  {
    id: 1,
    name: 'Living Room Furniture',
    image:
      'https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/guides-and-how-tos/choosing-living-room-furniture/Title-living-room-interior-design.jpg',
  },
  {
    id: 2,
    name: 'Bedroom Furniture',
    image: 'https://spacewood.in/wp-content/uploads/2017/08/ripple-1.jpg',
  },
  {
    id: 3,
    name: 'Office Furniture',
    image:
      'https://www.armstrongsofficefurniture.co.uk/wp-content/uploads/2023/04/Quality_office_furniture_desks_chairs.png',
  },
  {
    id: 4,
    name: 'Dining Room Furniture',
    image:
      'https://m.media-amazon.com/images/I/81T7E2Fvq-L._AC_SL1500_.jpghttps://www.asortie.com/uploads/en_urun_resimleri/klasik-yemek-odasi-modelleri-humayun.jpg',
  },
  {
    id: 5,
    name: 'Outdoor Furniture',
    image: 'https://m.media-amazon.com/images/I/91b0zG9LU0L.jpg',
  },
  {
    id: 6,
    name: 'Kids Furniture',
    image:
      'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/12/03165829/Kids-Furniture-Handy-Wardrobe.jpg',
  },
];
const CollectionPage = ({ image, title }) => {
  return (
    <div className="collection">
      <h2>Furniture Collections</h2>
      <div className="collections">
        {collections.map(collection => (
          <div className="collection-item" key={collection.id}>
            <img
              src={collection.image}
              alt={collection.name}
              className="collection-image"
            />
            <h3 className="collection-name">{collection.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
