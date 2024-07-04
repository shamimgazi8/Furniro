import React from 'react';
import CardDesign from './Card';
import { Carousel } from 'antd';
import OurProduct from './ProductList';
import BestOnlineStore from './BestOnlineFurniture';
import WhyChooseUs from './WhyChoseUs';
const cardsData = [
  {
    image:
      'https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo=',
    title: 'Dining',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsVQPqmxL7psT20FWF129ZklG5bNUA6mA9Ng&s',
    title: 'Living',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQXBjAOmj3RX5ZTqGW0VTq37DUTob0QxIoZFlzz7syln2ephulxD23Wa6kffFeoEo-_xk&usqp=CAU',
    title: 'Bedroom',
  },
  {
    image:
      'https://i.pinimg.com/550x/c8/15/c9/c815c9a85c21a4f45ea021581b007e27.jpg',
    title: 'kitchen',
  },
];
const photoData = [
  {
    id: 1,
    src: 'https://media.designcafe.com/wp-content/uploads/2022/10/15182743/beautiful-living-room-ideas.jpg',
    alt: 'Beautiful Living Room',
  },
  {
    id: 2,
    src: 'https://www.thespruce.com/thmb/ercyUzkNihNJGN9yIfD_y___t_g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cozy-bedroom-ideas-5078657-hero-2763eb67d1f0404e9ab8eb7280553e8e.jpg',
    alt: 'Modern Dining Room',
  },
  {
    id: 3,
    src: 'https://www.thespruce.com/thmb/ercyUzkNihNJGN9yIfD_y___t_g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cozy-bedroom-ideas-5078657-hero-2763eb67d1f0404e9ab8eb7280553e8e.jpg',
    alt: 'Cozy Bedroom',
  },
  {
    id: 4,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3DUNfVaiT6NxqZb4RBdVi4j4GbnWyd0_Xw&s',
    alt: 'Stylish Office',
  },
  {
    id: 5,
    src: 'https://d2rxt25e475whq.cloudfront.net/wp-content/uploads/2023/03/25140530/AdobeStock_327616328-962x500.jpeg',
    alt: 'Elegant Hallway',
  },
  // Add more photos here
];

const HomePage = ({ image, title }) => {
  return (
    <div className="">
      <div className="mainDiv">
        <div className='cover'>
        <Carousel autoplay fade={true} infinite={true}>
      <div>
         <img className="cover" src="/cover.png" alt="cover photo" />
      </div>
      <div>
         <img className="cover" src="https://en.idei.club/uploads/posts/2023-06/1687292696_en-idei-club-p-sofa-on-blue-background-dizain-instagram-1.jpg" alt="cover photo" />
      </div>
      <div>
         <img className="cover" src="https://en.idei.club/uploads/posts/2023-06/1687335561_en-idei-club-p-wall-with-sofa-dizain-krasivo-21.jpg" alt="cover photo" />
      </div>
      <div>
         <img className="cover" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/furniture-cover-design-template-e0a9255cf40ce6c2a7b5952a302344e5_screen.jpg?ts=1626612832" alt="cover photo" />
      </div>
    </Carousel>
    <br />

    <div className="coverDiv">
          <div className=" coverText">
            <span>New Arrival</span>
            <span className="coverspan">Discover Our</span>
            <span className="coverspan">New Collection</span>
            <p className=" describtion">
              In the competitive world of furniture businesses, having a catchy
              and memorable slogan can make all the difference. A great slogan
              not only helps you stand out from the crowd but also communicates
              your brand's unique value proposition to potential customers.
            </p>
            <div className=" btnbuynow">
              <a href="/shop">
                <button className="buy-button">Buy Now</button>
              </a>
            </div>
          </div>
        </div>
        </div>
      
        <div className=" cover2">
          <h1>Browse The Range</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div className="cards-container">
            {cardsData.map((card, index) => (
              <CardDesign key={index} image={card.image} title={card.title} />
            ))}
          </div>
        </div>
      </div>
      <OurProduct />
      <div>
        <div className="photo-gallery">
          <h2>Our Photo Gallery</h2>
          <Carousel autoplay arrows dots>
            {photoData.map(photo => (
              <div key={photo.id} className="carousel-item">
                <img className="car-img" src={photo.src} alt={photo.alt} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <BestOnlineStore/>
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
