import React from 'react';
// import Slideshow from './Slideshow'; // Correcting the import path
import Jobs from './Jobs'; // Assuming you have a Job component defined
import './Home2.css';

const Home = () => {
  return (
    <div>
      {/* <Slideshow /> */}
      {/* <h1 className='sec'>Sectors</h1> */}
      <div className='main'>
        <Jobs
          title="Coffee Shop"
          description="Join the vibrant coffee culture and earn while serving the perfect brew."
          image="https://i.pinimg.com/736x/8c/b6/63/8cb663267a471c99056b3eae3a25fa0f.jpg"
        />
        <Jobs
          title="Restaurant"
          description="Experience the culinary world and earn extra income as a part-time server or chef."
          image="https://f.hubspotusercontent20.net/hubfs/1928976/Imported_Blog_Media/restaurant-staff-laying-tables-in-empty-restaurant-1.jpg"
        />
        <Jobs
          title="Mobile Stores"
          description="Work part-time in mobile stores, helping customers find their dream phones and gadgets."
          image="https://img.indiafilings.com/learn/wp-content/uploads/2016/10/12010608/Mobile-Store-Business.jpg"
        />
        <Jobs
          title="D-mart"
          description="Join D-mart part-time and assist customers with their shopping needs."
          image="https://i0.wp.com/www.grownxtdigital.in/wp-content/uploads/2023/07/dmart-founder-acquires-health-glow-750cr-deal-1.jpg?fit=1837%2C1135&ssl=1"
        />
        <Jobs
          title="Malls"
          description="Work flexible hours in malls, providing assistance and ensuring a pleasant shopping experience."
          image="https://www.savethestudent.org/uploads/part-time-job-retailers.jpg"
        />
        <Jobs
          title="Medical Stores"
          description="Join medical stores part-time, assisting pharmacists and customers with medications."
          image="https://etimg.etb2bimg.com/thumb/msid-98744818,imgsize-32116,width-1200,height=765,overlay-ethealth/pharma/dcgi-says-medicines-should-be-sold-only-under-direct-supervision-of-pharmacists-in-retail-medical-stores.jpg"
        />
        <Jobs
          title="Electronics"
          description="Explore part-time opportunities in electronics stores, helping customers with tech solutions."
          image="https://sharpsheets.io/wp-content/uploads/2023/12/Electronics-store-4.jpg"
        />
        <Jobs
          title="Library"
          description="Work part-time in libraries, assisting visitors and organizing books."
          image="https://www.eui.eu/Content-Types-Assets/Web-Unit/Student-in-library-looking-at-books.xcc48173b.jpg?w=768&h=432&fit=crop"
        />
        <Jobs
          title="Universities"
          description="Join universities part-time, assisting with administrative tasks or tutoring services."
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuAUdeulFYp9dvsiWfX2pEWEI5tSSw6TeZWfhzq5_Cm86X8Jr0UNJVS-7Cc5ddUz0uPjY&usqp=CAU"
        />
        <Jobs
          title="Zomato/Swiggy"
          description="Earn extra income by delivering food part-time with Zomato or Swiggy."
          image="https://www.edudwar.com/wp-content/uploads/2022/01/Become-Zomato-Delivery-Boy-1280x720.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
