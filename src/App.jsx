import { useState } from "react";
import Footer from "./Components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Footer />
    </>
  );
}

export default App;
