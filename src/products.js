import one from "./images/i1.jpg"
import two from "./images/i2.jpg"
import three from "./images/i3.jpg"

function Products() {
    return (
      <div>
        <div className="products">
          <div>
            <img src={one} alt="Perfume"></img>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab dignissimos earum aliquam voluptatem modi illo harum! Adipisci inventore doloribus non.</p>
           </div>
          <div>
            <img src={two} alt="Perfume"></img>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab dignissimos earum aliquam voluptatem modi illo harum! Adipisci inventore doloribus non.</p>
          </div>
          <div>
            <img src={three} alt="Perfume"></img>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab dignissimos earum aliquam voluptatem modi illo harum! Adipisci inventore doloribus non.</p>
          </div>
        </div>
      </div>
    )
  }
  export default Products