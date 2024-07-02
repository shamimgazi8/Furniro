import React from 'react';

const AboutPage = ({ image, title }) => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <section className="history">
        <h3>Our History</h3>
        <p>
          Founded in 1990, our furniture shop has been providing high-quality
          furniture for over three decades. Starting as a small family business,
          we have grown into a renowned furniture provider known for our
          dedication to quality and customer satisfaction. Over the years, we've
          expanded our product range and opened multiple stores nationwide.
        </p>
      </section>
      <section className="mission">
        <h3>Our Mission</h3>
        <p>
          Our mission is to offer premium furniture that combines style,
          comfort, and durability. We strive to enhance the living spaces of our
          customers by providing pieces that reflect their unique tastes and
          needs. Our commitment is to bring the best in furniture design and
          craftsmanship to every home and office.
        </p>
      </section>
      <section className="values">
        <h3>Our Values</h3>
        <ul>
          <li>
            <strong>Quality:</strong> We use the finest materials and
            craftsmanship to ensure our furniture stands the test of time.
          </li>
          <li>
            <strong>Customer Satisfaction:</strong> Our customers are our top
            priority. We aim to exceed their expectations with every purchase.
          </li>
          <li>
            <strong>Innovation:</strong> We continuously update our designs to
            keep up with the latest trends and technologies in furniture making.
          </li>
          <li>
            <strong>Sustainability:</strong> We are committed to environmentally
            friendly practices and sourcing sustainable materials.
          </li>
        </ul>
      </section>
      <section className="team">
        <h3>Our Team</h3>
        <p>
          Our team comprises skilled artisans, experienced designers, and
          dedicated customer service representatives. We work together to bring
          our customers the best furniture shopping experience. Our artisans
          take pride in their work, ensuring every piece is crafted with
          precision and care.
        </p>
        <div className="team-photos">
          <img
            src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
            alt="Team member 1"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXQoo21z972uS-JHDFnD7PDQC7gJocS8U32FugISogE6JnvceTKmlYE9FMdalmbbwkbo&usqp=CAU"
            alt="Team member 2"
          />
          <img
            src="https://jangada-dideias.pt/wp-content/uploads/2019/08/team-member-01.jpg"
            alt="Team member 3"
          />
        </div>
      </section>
      <section className="testimonials">
        <h3>Customer Testimonials</h3>
        <blockquote>
          <p>
            "I recently purchased a dining table from this shop, and I couldn't
            be happier. The quality is exceptional, and it fits perfectly in my
            home."
          </p>
          <footer>— Jane Doe</footer>
        </blockquote>
        <blockquote>
          <p>
            "The customer service was outstanding. They helped me choose the
            perfect sofa for my living room. I highly recommend this store!"
          </p>
          <footer>— John Smith</footer>
        </blockquote>
      </section>
      <section className="visit-us">
        <h3>Visit Us</h3>
        <p>
          We invite you to visit our stores and experience our wide range of
          furniture in person. Our friendly staff is always ready to assist you
          in finding the perfect pieces for your home or office.
        </p>
        <p>
          <strong>Store Locations:</strong>
          <ul>
            <li>123 Main Street, Cityville</li>
            <li>456 Elm Street, Townsville</li>
            <li>789 Oak Street, Villageton</li>
          </ul>
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
