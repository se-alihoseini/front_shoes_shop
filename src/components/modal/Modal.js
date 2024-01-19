import './Modal.css'

const Modal = ({closeBtn}) => {
  return (
      <div>
          <div className='modal_backdrop'>
              <div className='modal'>
                  <h1>this is modal</h1>
                  <p>mada by ali modal</p>
                  <button onClick={closeBtn}>بستن پنجره</button>
              </div>
          </div>
      </div>
  )
}

export default Modal
