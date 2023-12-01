import { ChangeEvent, useRef, useState } from "react";
import "./App.scss";
import defaultImage from "./assets/mahdi-wall.jpg";
import Puzzle from "./components/Puzzle";
function App() {
  const [puzzleSize, setPuzzleSize] = useState<number>(3);
  // const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(
    defaultImage
  );
  const elementRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        // setSelectedFile(file);
        setBackgroundImage(result);

        // Create an Image object to get the width and height
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="main">
      <div className="left-panel">
        <h1>A reactive sliding puzzle</h1>
        <label>
          <input type="radio" checked={puzzleSize == 3} onClick={()=>setPuzzleSize(3)}/> 3x3
        </label>
        <label>
          <input type="radio" checked={puzzleSize == 4} onClick={()=>setPuzzleSize(4)}/> 4x4
        </label>
        <label>
          <input type="radio" checked={puzzleSize == 5} onClick={()=>setPuzzleSize(5)}/> 5x5
        </label>
        <label>
          <input type="radio" checked={puzzleSize == 6} onClick={()=>setPuzzleSize(6)}/> 6x6
        </label>
        <button onClick={() => elementRef.current?.click()}>Change Image</button>
        <input
          style={{ display: "none" }}
          ref={elementRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <div className="guide">
          Move blocks on the right so the following image is set:
        </div>

        {backgroundImage && (
          <div className="image-holder" >
            <img src={backgroundImage} alt="no image" />
            <div style={{
              width: (100/puzzleSize)+"%",
              height: (100/puzzleSize)+"%",
          }} className="blank"></div>
          </div>
        )}

        <div className="hint">
          Hint: after correcting the image, the blank will be on bottom right of
          the canvas.
        </div>
      </div>
      <div className="right-panel">
        {backgroundImage && <Puzzle size={puzzleSize} image={backgroundImage} />}
      </div>
    </div>
  );
}

export default App;
