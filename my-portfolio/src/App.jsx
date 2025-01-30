import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/about";
import { Skills } from "./components/Skills";
import { LeetCode } from "./components/LeetCode";
import { Projects } from "./components/Projects";
import "./App.css";

function App() {
  const [logoText, setLogoText] = useState("Welcome!");

  useEffect(() => {
    const texts = ["Hello!","नमस्ते!","Bonjour!", "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ!", "Hola!", "Ciao!", "안녕하세요!", "こんにちは!", "你好!", "Olá!", "Привет!", "Merhaba!"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setLogoText(texts[index]);
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <div className="app-container">
        <div className="left-section">
          <div className="logo">{logoText}</div>
          <Hero />
        </div>
        <div className="right-section">
          <Header />
          <div className="image-container">
            <img src="/1723373592357.jpeg" alt="Professional headshot" className="profile-image" />
          </div>
        </div>
      </div>
      <img src="/rocket2.webp" alt="rocket" className="rocket" />
      <About />
      <Skills />
      <LeetCode />
      <Projects />
    </div>
  );
}

export default App;
