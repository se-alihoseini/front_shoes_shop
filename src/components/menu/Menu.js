import './Menu.css'
import darbare_img from "./media/darbare.png"
import tamas_img from "./media/tamas.png"
import rahnama_img from "./media/rahnama.png"
import sharayet_img from "./media/sharayet.png"
import taghaza_img from "./media/taghaza.png"
import lock_img from "./media/lock.png"

const Menu = () => {
  return (
      <div class="additional-buttons">
          <div class="additional-button">
               <img src={darbare_img} width="30px" height="30px"/>
              درباره ما
          </div>
          <div class="additional-button">
              <img src={tamas_img} width="30px" height="30px"/>
              تماس با ما
          </div>
          <div class="additional-button">
              <a href="./shoesize/shoeSize.html" > <img src={rahnama_img} width="30px" height="30px"/></a>
                  راهنمای انتخاب سایز کفش
          </div>
          <div class="additional-button">
              <img src={sharayet_img} width="30px" height="30px"/>
                  شرابط بازگرداندن
          </div>
          <div class="additional-button">
              <a href="./cooperation/cooperation.html" > <img src={taghaza_img} width="30px" height="30px"/></a>
                  تقاضای همکاری
          </div>
          <div class="additional-button">
              <img src={lock_img} width="30px" height="30px"/>
                      حریم خصوصی
          </div>
      </div>
  )
}

export default Menu
