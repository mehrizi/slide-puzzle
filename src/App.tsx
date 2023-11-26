import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Puzzle from "./components/Puzzle";

function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [imageSize, setImageSize] = useState<{
    width: number;
    height: number;
  } | null>(null);

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
    <>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {backgroundImage && <Puzzle image={backgroundImage} />}
    </>
  );
}

export default App;
