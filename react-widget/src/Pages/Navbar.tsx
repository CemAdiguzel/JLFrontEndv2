import { Grid } from "@material-ui/core";
import React from "react";
import Select from "react-select";

function Navbar({
  userLang,
  setUserLang,
  userTheme,
  setUserTheme,
  fontSize,
  setFontSize,
}: any) {
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
    <Grid container item>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "20px",
          height: "50px",
          textAlign: "center",
          color: "#afec3f",
          backgroundColor: "#474747",
          gap: "20px",
        }}
      >
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
        <input
          type="range"
          min="18"
          max="30"
          value={fontSize}
          step="2"
          onChange={(e) => {
            setFontSize(e.target.value);
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Navbar;
