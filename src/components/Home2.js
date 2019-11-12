import React from 'react';
import './Home2.css';

const Home = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-contents">
          <h1 className="title">Connect With Friends</h1>
          <p className="subtitle">How we live is what makes us real.</p>
          <div className="search-area">
            <input className="search-box" type="text" placeholder="Search for friends" />
            <input className="search-btn" type="submit" value="Search" />
          </div>
        </div>
      </div>
      <div className="more-info">
        <div className="more-info-child">
          <span className="p-subtitle">sicing elit.Ea aspernatur incidunt</span>
          <p className="p-home-page">
            distinctio quidem expedita laborum. Soluta, laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
         </p>
          <button className="btn-veiw-price"> provident ut</button>
        </div>
        <div className="more-info-child">
          <span className="p-subtitle">Win qui veritatis mollitia ?</span>
          <p className="p-home-page">
            Perferendis quaerat corporis possimus amet tempora maxime odit animi laudantium quia, a illum impedit vitae inventore
          </p>
          <button className="btn-veiw-price">expedita sapi</button>
        </div>
      </div>
      <div className="more-info bg-white">
        <div className="more-info-child">
          <p className="quote">
            "Perferendis quaerat corporis possimus amet tempora maxime odit animi laudantium quia, a illum impedit vitae inventore."
          </p>
          <span className="customer-name"><strong>&mdash;</strong>Josh Spenser</span>
        </div>
        <div className="more-info-child">
          <img className="ad-image" src="https://images.unsplash.com/photo-1553009338-80e505b3f61b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="a red car" />
        </div>
      </div>
      <div className="footer">
        <ul className="footer-nav-list">
          <li className="nav-item">Contact us</li>
          <li className="nav-item">About us</li>
          <li className="nav-item">Report issues</li>
          <li className="nav-item">Terms and conditions</li>
        </ul>
      </div>
    </div>
  );
};
  

export default Home;



