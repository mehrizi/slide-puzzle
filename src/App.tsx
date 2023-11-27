import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Puzzle from "./components/Puzzle";
import defaultImage from "./assets/mahdi-wall.jpg";
function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(
    defaultImage
  );
  const [imageSize, setImageSize] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const elementRef = useRef();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setSelectedFile(file);
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
        <button onClick={() => elementRef.current.click()}>Change Image</button>
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
          <div className="image-holder">
            <img src={backgroundImage} alt="no image" />
          </div>
        )}

        <div className="hint">
          Hint: after correcting the image, the blank will be on bottom right of the canvas.
        </div>
      </div>
      <div className="right-panel">
        {backgroundImage && <Puzzle image={backgroundImage} />}
      </div>
    </div>
  );
}

export default App;
