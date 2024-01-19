import './Footer.css'

const Footer = () => {
  return (
      <footer>
          <div className="column">
              <p className="bold">خدمات مشتری</p>
              <p>سوالات متداول</p>
              <p>بازگرداندن کالا</p>
              <p>شرایط استفاده</p>
              <p>حریم شخصی</p>
          </div>
          <div className="column">
              <p className="bold">اطلاعات ما</p>
              <p>درباره ما</p>
              <p>تماس باما</p>
          </div>

          <div className="column">
              <p>به ما در رسانه اجتماعی بپیوندید</p>
              <div className="icon-row">
                        <span className="icon">
                            <img src="twitter.png" width="30px" height="30px"/>
                        </span>
                  <span className="icon">
                            <img src="gplus.png" width="30px" height="30px"/>
                        </span>
                  <span className="icon">
                            <img src="facebook.png" width="30px" height="30px"/>
                        </span>
              </div>

              <div className="icon-row">
                        <span className="icon">
                            <img src="./twitter.png" width="30px" height="30px"/>
                        </span>
                  <span className="icon">
                            <img src="./gplus.png" width="30px" height="30px"/>
                        </span>
                  <span className="icon">
                            <img src="./facebook.png" width="30px" height="30px"/>
                        </span>
              </div>
          </div>
          <div className="column">
              <p>تمامی حقوق این سایت متعلق به دانشگاه بوده و هر گونه استفاده از منابع و طراحی های این سایت توسط نهاد های
                  خارج از دانشگاه با پیگرد قانونی همراه خواهد بود</p>
          </div>
      </footer>
  )
}

export default Footer
