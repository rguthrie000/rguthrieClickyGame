import React, { useEffect, useState } from "react";
import ClickyHead from "./pages/ClickyHead";
import ClickyBody from "./pages/ClickyBody";
import gifList from "./assets/gifs/gifList";

export default function ClickyApp() {
  const [score         ,          setScore] = useState(  0  );
  const [running       ,        setRunning] = useState(false);
  const [victory       ,        setVictory] = useState(false);
  const [gridSide      ,       setGridSide] = useState(  2  );
  const [pageOrder     ,      setPageOrder] = useState( []  );
  const [clickedImages ,  setClickedImages] = useState( []  );

  // Image grid set up at initialization, and also when the user
  // selects a different gridSide
  useEffect(() => {
    const zeros = [
      // 49
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ];

    if (running) {
      // just transitioned to running
      setVictory(false);
      setScore(0);
    } else {  
      // just transitioned to not running.
      // pageOrder[] will be gridSide*gridSide randomly selected
      // gif Objects with a sequential assignment of imgIds. (the
      // sequential numbering ensures the range of imgIds doesn't 
      // exceed the count of elements.)
      setPageOrder(choose(gridSide));
      // clear the tracking array.  
      setClickedImages(zeros.slice(0,gridSide*gridSide));
    }  
  }, [gridSide,running]);

  // Assign the new gridSide; useEffect() will be triggered from the assignment.
  // Note the selector on the page is only drawn when running is false.
  function handleGridChange(event) {
    setGridSide(event.target.value);
  }

  // Toggle the Go/Stop button. Change of 'running' will trigger useEffect() 
  function handleGoClick() {
    setRunning(running? false : true);
  }

  function choose(sideSize) {
    // grid is a square; total elements is square of side length
    let elements = sideSize * sideSize;
    // get the pool of gifs
    let workArray = gifList();
    // shuffle the copy
    workArray.sort((a,b) => (Math.random()-0.5));
    // keep only 'elements' members 
    workArray = workArray.slice(0,elements);
    // now sequentially number the ids from 0 through (elements-1)
    workArray = workArray.map( (elt,i) => ({imgId: i, url: elt.url}) );
    // and return the result
    return(workArray);
  }

  function handleImgClick(imgId) {
    // imgId is the image index (as opposed to index of the displayed button)
    const imageNumber = imgId;

    if (clickedImages[imageNumber]) {
      // oops, already clicked on this one.  Game Over.
      setRunning(false);
    } else {
      if (score === (gridSide**2 - 1)) {
        setVictory(true);
        setRunning(false);
        setScore(gridSide**2);
      } else {
        clickedImages[imageNumber] = 1;
        setScore(score + 1);
        let bufferArray = pageOrder;
        bufferArray.sort((a,b) => Math.random()-0.5);
        setPageOrder(bufferArray);
      }
    }
  }

  return (
    <div className="container">
      <ClickyHead
        running={running}
        score={score}
        gridSide={gridSide}
        handleGoClick={handleGoClick}
        handleGridChange={handleGridChange}
      />
      <ClickyBody
        victory={victory}
        running={running}
        pageOrder={pageOrder}
        gridSide={gridSide}
        handleImgClick={handleImgClick}
      />
    </div>
  )  
}
