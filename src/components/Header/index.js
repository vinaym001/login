import './index.css'

const Header = () => (
  <div className="bg-container">
    <div className="header">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="logo"
          alt="website logo"
        />
      </div>
      <ul className="ul-container">
        <li className="li">Home</li>
        <li className="li">Products</li>
        <li className="li">Cart</li>
        <button className="logout-btn" type="button">
          <li>Logout</li>
        </button>
      </ul>
    </div>
  </div>
)

export default Header
