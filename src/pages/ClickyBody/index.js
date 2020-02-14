import React from "react";
import "./style.css"

export default function ClickyBody(props) {

  function emitCard(elt,index) {
    console.log(`index ${index}, props.gridSide ${props.gridSide}`)
    return(
      (
        <div key={index}>
          <div className="card">
            <input type="image" src={elt.url} alt="submit" key={elt.imgId} 
              onClick={()=>props.handleImgClick(elt.imgId)} width="128" height="128"></input>
          </div>
        </div>
      )
    );
  };

  return (    
    <div className="row game-board" width="0" id={props.victory ? "victory" : "normal"}>
      <div className="col-sm-12 grid-field">
        {!props.running ? (<div><h3 id="body-label">{props.victory? "WINNER!": "Click Go!"}</h3></div>) : 
          props.pageOrder.map(emitCard)}
      </div>
    </div>
  );
}