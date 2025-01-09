import './details.css';
const Details = () => {
  return (
    <div className='details'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Zain</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Privacy % help</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
       
        <div className="photos">
          <div className="photoItem">
            <div className="photodetail">
            <img src="./infoimg.jpg" alt="" />
            <span>Photo_25.jpg</span>
            </div>
             <img src="./download.png" alt="" />
          </div>  
          </div>
           </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  )
}

export default Details