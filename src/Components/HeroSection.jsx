export default function HeroSection() {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVES THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
           <button>Shop Now</button>
           <button className="secondary-button">Category</button>
        </div>

        <div className="shopping">
            <p>Also Available On</p>

            <div className="brand-icons">
                 <img src="./images/amazon.jpg" alt="amazon-logo"/>
                 <img src="./images/flipkart.jpg"  alt="flipkart-logo"/>
            </div>
        </div>
      </div>

      <div className="hero-image">
          <img src="./images/shoe_image.jpg" alt="shoes-logo"/>      
          </div>
    </main>
  );
}
