import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="bg-container1">
    <Header />
    <div className="container">
      <div className="txt-con">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <p className="para">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been as the marker of the
          era and we in a revolution. Your fashion make you seen and heard the
          way you are .So celebrate the seen with the new exiciting fashione
          avalilable.{' '}
        </p>
        <div className="show-btn-cont">
          <button className="shop-btn" type="button">
            Shop Now
          </button>
        </div>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        className="home-img"
        alt="clothes that get you noticed"
      />
    </div>
  </div>
)

export default Home
