import { useState } from "react";
import "./index.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [message, setMessage] = useState("");

  function calculateImc() {
    const h = height / 100;
    const imc = weight / (h * h);

    if (imc < 18.6) {
      setMessage("vc está abaixo do peso seu imc: " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      setMessage("peso ideal seu imc: " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 35.9) {
      setMessage("vc está levemente acima do peso seu imc: " + imc.toFixed(2));
    } else if (imc > 35.9) {
      setMessage("cuidado obesidade seu imc:" + imc.toFixed(2));
    } else {
      setMessage("");
    }
  }
  return (
    <div className="app">
      <h1>Calculadora IMC </h1>
      <span>Vamos calcular o seu IMC</span>

      <div className="area-input">
        <input
          type="text"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
          placeholder="peso em (kg) Ex: 90"
        />
        <input
          type="text"
          value={height}
          onChange={(event) => setHeight(event.target.value)}
          placeholder="altura em (cm) Ex: 180"
        />
        <button onClick={calculateImc}>calcular</button>
      </div>

      <h2>{message}</h2>
    </div>
  );
}

export default App;
