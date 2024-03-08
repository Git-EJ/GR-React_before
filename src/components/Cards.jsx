// ======================================= CARDS + CARDS ANIMATION* =======================================
// set off the CSS flip animation by adding the CSS class 'rotate' to CSS class 'card-inner' after clicking on a card

import {useState} from "react"
import CardBackText from "./BackText"




function Cards({ metier, id, color, dot, background, backtext1, backtext2, backtext3, backtext4 }) {

  const [isActive, setActive] = useState();
  const toggleClick = () => {
    setActive(!isActive);
  }

  return (

    <div id={id} className="card" onClick={() => toggleClick()} >
      <div className={`card-inner${isActive ? ' rotate' : ''}`}>
        
        <div className="card-front" style={{ backgroundImage: `url(${background})` }} >
          <div className="card-front-text" style={color}>
            <p>{metier}</p>
            <hr />
            <p className="dot">{dot}</p>
          </div>
        </div>

        <CardBackText
          backtext1={backtext1}
          backtext2={backtext2}
          backtext3={backtext3}
          backtext4={backtext4}
        />
      </div>
    </div>
  )
}

export default Cards;

