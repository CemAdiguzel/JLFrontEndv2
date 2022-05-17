import { useState } from "react";
// import "./Terminal.css";
import Editor from "@monaco-editor/react";
import Navbar from "./Navbar";
import Axios from "axios";
import React from "react";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

function Terminal() {
  // State variable to set users source code
  const [userCode, setUserCode] = useState(``);

  // State variable to set editors default language
  const [userLang, setUserLang] = useState("python");

  // State variable to set editors default theme
  const [userTheme, setUserTheme] = useState("vs-dark");

  // State variable to set editors default font size
  const [fontSize, setFontSize] = useState(20);

  // State variable to set users input
  const [userInput, setUserInput] = useState("");

  // State variable to set users output
  const [userOutput, setUserOutput] = useState("");

  // Loading state variable to show spinner
  // while fetching data
  const [loading, setLoading] = useState(false);

  const options = {
    fontSize: fontSize,
  };

  // Function to call the compile endpoint
  function compile() {
    setLoading(true);
    if (userCode === ``) {
      return;
    }

    // Post request to compile endpoint
    Axios.post(`http://localhost:3001/compile`, {
      code: userCode,
      language: userLang,
      input: userInput,
    })
      .then((res) => {
        setUserOutput(res.data.output);
      })
      .then(() => {
        setLoading(false);
      });
  }

  // Function to clear the output screen
  function clearOutput() {
    setUserOutput("");
  }

  return (
    <Grid container style={{ height: "100%" }}>
      <Grid
        item
        xs={12}
        style={{
          width: "100%",
          overflowY: "scroll",
          backgroundColor: "#474747",
        }}
      >
        <Grid item xs={12}>
          <Navbar
            userLang={userLang}
            setUserLang={setUserLang}
            userTheme={userTheme}
            setUserTheme={setUserTheme}
            fontSize={fontSize}
            setFontSize={setFontSize}
          />
        </Grid>
        <Grid item xs={12} style={{ display: "flex" }}>
          <div
            className="left-container"
            style={{ position: "relative", flex: "60%" }}
          >
            <Editor
              options={options}
              width="100%"
              theme={userTheme}
              language={userLang}
              defaultLanguage="python"
              defaultValue="# Enter your code here"
              onChange={(value) => {
                setUserCode(value);
              }}
            />
            <button
              className="run-btn"
              onClick={() => compile()}
              style={{
                position: "absolute",
                bottom: "10px",
                right: "18px",
                width: "80px",
                height: "40px",
                fontSize: "22px",
                fontWeight: "bold",
                backgroundColor: "#afec3f",
                border: "none",
                borderRadius: "4px",
                transition: "0.3s",
                cursor: "pointer",
              }}
            >
              Run
            </button>
          </div>
          <div
            className="right-container"
            style={{
              flex: "40%",
              height: "80vh",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#242424",
              borderLeft: "3px solid #1f65e6",
              padding: "5px",
            }}
          >
            <h4 style={{ color: "orange" }}>Input:</h4>
            <div className="input-box" style={{ flex: "50%" }}>
              <textarea
                id="code-inp"
                style={{ fontSize: "16px" }}
                onChange={(e) => setUserInput(e.target.value)}
              ></textarea>
            </div>
            <h4 style={{ color: "orange" }}>Output:</h4>
            <Grid item>
              {loading ? (
                <div
                  className="spinner-box"
                  style={{
                    flex: "50%",
                    backgroundColor: "#242424",
                    overflowY: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h4 style={{ color: "orange" }}>Loading ..</h4>
                </div>
              ) : (
                <div
                  className="output-box"
                  style={{
                    flex: "50%",
                    overflowY: "auto",
                    color: "white",
                    position: "relative",
                    border: "1px solid orange",
                    backgroundColor: "#fff",
                    minHeight: 250,
                  }}
                >
                  <pre>{userOutput}</pre>
                  <button
                    onClick={() => {
                      clearOutput();
                    }}
                    className="clear-btn"
                    style={{
                      position: "absolute",
                      bottom: "14px",
                      right: "18px",
                      width: "80px",
                      height: "40px",
                      fontSize: "22px",
                      fontWeight: "bold",
                      color: "white",
                      backgroundColor: "#1f65e6",
                      border: "none",
                      borderRadius: "4px",
                      transition: "0.3s",
                      cursor: "pointer",
                    }}
                  >
                    Clear
                  </button>
                </div>
              )}
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} style={{ display: "flex" }}>
          <Link to="/lab/student-exam-list">
            <Button
              variant="contained"
              style={{ background: "orange", color: "#fff" }}
            >
              Save
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Terminal;
