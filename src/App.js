import { useState } from "react";
import Form from "./components/Form/Form";
import ResultForm from "./components/ResultForm/ResultForm";
import "./index.css";

function App() {
  const [inputValue, setInputValue] = useState([]);
  const [shortLink, setShortLink] = useState("");
  const [addClass, setAddClass] = useState(false);

  return (
    <div className="App">
      <div style={{ height: "30px", marginTop: "120px" }}>
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          setShortLink={setShortLink}
          setAddClass={setAddClass}
        />
        <ResultForm shortLink={shortLink} addClass={addClass} />
      </div>
    </div>
  );
}
export default App;
