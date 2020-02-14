import React from "react";
import "./style.css"

export default function ClickyHead(props) {
    return (    
        <div id="game-status" className="row">
            <div className="col-sm-3">
                <div id="nameBox">
                    <h5>rguthrie's</h5>
                    <h4>Clicky Game</h4>
                </div>            
            </div>
            <div className="col-sm-2 mt-5">
                <button className="btn btn-primary" 
                    onClick={props.handleGoClick}><h4>{props.running? 'Stop':'Go!'}</h4></button>
            </div>
            <div className="col-sm-2 mt-5">
                <div id="score-box">
                    <h1>Score: {props.score}</h1>
                </div>
            </div>
            <div className="col-sm-5">
                {props.running ?  (<p></p>) : (
                    <div className="col-auto mt-5">
                        <label htmlFor="grid-size" id="lenQuery"><h4>Grid Size (X by X)? (2-7):</h4></label>
                        <input type="number" id="grid-size" name="grid-size" className="numericBox" 
                            step="1" min="2" max="7" value={props.gridSide} onChange={props.handleGridChange}/>
                    </div>
                )}
            </div>
        </div>
    )
}
