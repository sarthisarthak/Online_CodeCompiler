// Filename: Navbar.js

import React from "react";
import Select from "react-select";
import "./Navbar.css";

const Navbar = ({
  userLang,
  setUserLang,
  userTheme,
  setUserTheme,
  fontSize,
  setFontSize,
}) => {
  const languages = [
    { value: "c", label: "C" },
    { value: "cpp", label: "C++" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
  ];
  const themes = [
    { value: "vs-dark", label: "Dark" },
    { value: "light", label: "Light" },
  ];
  return (
    <div className="navbar">
      <h1>CodeCrafter</h1>
      <Select
        options={languages}
        value={userLang}
        onChange={(e) => setUserLang(e.value)}
        placeholder={userLang}
      />
      <Select
        options={themes}
        value={userTheme}
        onChange={(e) => setUserTheme(e.value)}
        placeholder={userTheme}
      />
      <label>Font Size</label>
      <select
        value={fontSize}
        onChange={(e) => {
          setFontSize(e.target.value);
        }}
        style={{ fontSize: "18px", borderRadius: "10px", color: "#6c757d" }}
      >
        <option value="18">18px</option>
        <option value="20">20px</option>
        <option value="22">22px</option>
        <option value="24">24px</option>
        <option value="26">26px</option>
        <option value="28">28px</option>
        <option value="30">30px</option>
      </select>
    </div>
  );
};

export default Navbar;
