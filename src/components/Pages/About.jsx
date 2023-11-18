import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './About.css'; // Import your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';

const responsive = {
  desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
  },
  tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
  },
  mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
  }
};

const About = () => {
  // Dummy testimonial data
  const testimonials = [
    {
      name: 'Sarah J., New York',
      text: "I stumbled upon RaySonicShop while searching for a new pair of headphones, and I was blown away by their selection. The customer service was exceptional, and I found the perfect set of headphones. RaySonicShop is now my go-to tech store!",
    },
    {
      name: 'Alex M., San Francisco',
      text: "As a tech enthusiast, I'm always on the lookout for the latest gadgets. RaySonicShop never disappoints. Their team of experts helped me choose the best smartwatch, and I've been thrilled with my purchase. Their commitment to quality sets them apart.",
    },
    {
      name: 'Emily R., Los Angeles',
      text: "I'm a fitness fanatic, and I needed a reliable smartwatch to keep track of my workouts. RaySonicShop had just what I needed. The product arrived quickly, and the quality exceeded my expectations. I'm a happy customer!",
    },
    {
      name: 'David L., Chicago',
      text: "I've shopped at many online tech stores, but RaySonicShop is in a league of its own. The range of products they offer is astounding, and their blog keeps me updated on the latest tech trends. I can't recommend them enough!",
    },
    {
      name: 'Jessica W., Miami',
      text: "I was skeptical about buying earbuds online, but RaySonicShop's customer support put my worries to rest. They answered all my questions promptly, and the earbuds I purchased are fantastic. I'll definitely be shopping here again.",
    },
  ];

  // Feedback form state
  const [feedback, setFeedback] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send feedback to your server or perform desired actions
    console.log('Feedback submitted:', feedback);
    // Clear the feedback input
    setFeedback('');
  };

  return (
    <div className="container about-us">
      <h1 className="text-center my-4 about">Welcome To - RaySonic Shop</h1>
      <p> Welcome to RaySonicShop, where innovation meets style, and technology takes center stage. Our mission is simple: to bring you the latest and greatest in smartwatches, headphones, speakers, and earbuds, all curated to elevate your lifestyle.</p>
      <div className="row">
        <div className="col-lg-12 journey">
          <h2>Our Journey</h2>
          <p>RaySonicShop was born out of a shared passion for cutting-edge technology. What began as a humble idea has blossomed into a tech haven, where we strive to provide you with the finest gadgets the industry has to offer.</p>
        </div>

        <div className="col-lg-12 apart">
          <h2>What Sets Us Apart</h2>
          <ol>
           <li><span>Quality Uncompromised:</span>  At RaySonicShop, quality is non-negotiable. We meticulously handpick every product, ensuring it meets our exacting standards for performance,  </li> 

           <li><span>Tech Gurus at Your Service:</span> Our dedicated team of tech experts is here to assist you on your journey. Whether you're seeking advice on choosing the perfect smartwatch or need troubleshooting help, we're your trusted companions. </li>

           <li><span>Quality Uncompromised:</span>  At RaySonicShop, quality is non-negotiable. We meticulously handpick every product, ensuring it meets our exacting standards for performance,  </li>


           <li><span>Ahead of the Curve:</span>  The tech world moves fast, but RaySonicShop moves faster. We're always on the lookout for the latest trends and emerging technologies, ensuring you're   </li>

           <li><span>Community Matters:</span> More than just a store, RaySonicShop is a community of tech enthusiasts. Join our forums, follow our blog, and connect with like-minded individuals who share your passion for all things tech.  </li>
          </ol>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 dis">
          <h2>Discover Our Range</h2>
          <p> Dive into our extensive catalog, featuring a diverse range of products that cater to your every need:</p>
          <ul className='d-block discover'style={{paddingLeft:"0"}} >
            <li><span>Smartwatches:</span>Stay connected, track your fitness, and make a style statement with our premium smartwatches. </li>

            <li><span>Headphones:</span>Immerse yourself in sound like never before with our selection of top-tier headphones. </li>

            <li><span>Speakers:</span>Elevate your auditory experience, be it at home or on the go, with our collection of speakers designed to impress. </li>

            <li><span>Earbuds:</span>Redefine convenience and sound quality with our range of earbuds, perfect for your active lifestyle. </li>
          </ul>
        </div>

        <div className="col-md-12 satis">
          <h2>Your Satisfaction, Our Commitment</h2>
          {/* Add content for "Your Satisfaction, Our Commitment" here */}
          <p> Your satisfaction is the heartbeat of RaySonicShop. We offer swift and reliable shipping, a hassle-free returns process, and an unwavering commitment to customer support. Your shopping experience is our top priority.</p>
        </div>
      </div>
      {/* Testimonials */}
      <section className='testimonial d-none d-md-block'> 
      <div className="container">
      <div className='row'> 
      <div className="col-md-12">
      <div className='section-header'>
      <h2>Testimonials</h2> 
      </div>  
        <Carousel 
        responsive={responsive} infinite={true}
        swipeable={false}
        draggable={false}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonials">
              <p>{testimonial.text}</p>
              <p className="text-right test-name">- {testimonial.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      </div>
    </div>
    </section>

      {/* Feedback Form */}
      <div className="row">
        <div className="col-md-12 feedback">
          <h2>Share Your Feedback</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Your Message..</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
            </Form.Group>
            <Button className='send-btn' variant="primary" type="submit">
              Send Feedback
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default About;
