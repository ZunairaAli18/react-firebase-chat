import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
const Chat = () => {
    const [open, setOpen] = useState(false)
    const [text, setText] = useState(false)
    
    const endRef = useRef(null)
    
    useEffect(() => {
        endRef.current?.scrollIntoView({ behaviour: "smooth" });
    },[]);
    const handleEmoji = e => {
        setText((prev) => prev + e.emoji);
        setOpen(false)
        
    }
    
  return (
      <div className='chat'>
          <div className="top">
              <div className="user">
                  <img src="./avatar.png" alt="" />
                  <div className="texts">
                      <span>Zain</span>
                      <p>Online</p>
                  </div>
              </div>
              <div className="icons">
                  <img src="./phone.png" alt="" />
                  <img src="./video.png" alt="" />
                  <img src="./info.png" alt="" />
              </div>
          </div>
          <div className="center">
              <div className="message">
                  <img src="./avatar.png" alt="" />
                  <div className="texts">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae vel officia, odit ratione sit dolor sint unde autem corrupti repellat enim dolore voluptatum numquam quidem? Sit adipisci similique impedit.</p>
                      <span>One minute ago</span>
                </div>
              </div>
              <div className="message own">
                 
                  <div className="texts">
                      <img src="./userimage.jpeg" alt="" />
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae vel officia, odit ratione sit dolor sint unde autem corrupti repellat enim dolore voluptatum numquam quidem? Sit adipisci similique impedit.</p>
                      <span>One minute ago</span>
                </div>
              </div>
              <div className="message">
                  <img src="./avatar.png" alt="" />
                  <div className="texts">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae vel officia, odit ratione sit dolor sint unde autem corrupti repellat enim dolore voluptatum numquam quidem? Sit adipisci similique impedit.</p>
                      <span>One minute ago</span>
                </div>
              </div>
              <div className="message own">
                 
                  <div className="texts">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae vel officia, odit ratione sit dolor sint unde autem corrupti repellat enim dolore voluptatum numquam quidem? Sit adipisci similique impedit.</p>
                      <span>One minute ago</span>
                </div>
              </div>
<div ref={endRef}></div>
          </div>

          <div className="bottom">
              <div className="icons">
                  <img src="./img.png" alt="" />
                  <img src="./camera.png" alt="" />
                  <img src="./mic.png" alt="" />
              </div>
              <input type="text" placeholder="Type a message...." onChange={(e)=>setText(e.target.value)} value={text} />
              <div className="emoji">
                  <img src="./emoji.png" alt="" onClick={() => setOpen(prev => !prev)} />
                  <div className="picker">
                      <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                  </div>
                  
              </div>
              <button className="sendButton">Send</button>
          </div>
    </div>
  )
}

export default Chat