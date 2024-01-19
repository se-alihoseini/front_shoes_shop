import './Header.css'

const Header = ({open_sgn_btn}) => {
  return (
      <header>
          <div className="brand">
              <h1>Shoes Shop</h1>
          </div>
          <div className="column">
              <button onClick={()=> open_sgn_btn(true)}>عضویت</button>
              <button>ورود</button>
          </div>
          <div className="column nav navStyle">
              <a href="#">مردانه</a>
              <a href="#">زنانه</a>
              <a href="#">بچه گانه</a>
              <a href="#">ورزشی</a>
              <a href="#">تخفیف</a>
              <a href="#">برندها</a>
          </div>
          <div className="column search-bo">
              <img class="search-image" src="./search.png" width="20px" height="20px"/>
              <input type="text" class="search-box" placeholder="جستجو..."></input>
          </div>
      </header>
  )
}

export default Header
