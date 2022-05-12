/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/quotes
import * as React from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { AUTHENTICATE_USER } from "../graphql/mutations/authenticate";
import { useMutation } from "@apollo/client";

export default function MainPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const [authenticateUser] = useMutation(AUTHENTICATE_USER);

  const handleSubmit = async () => {
    const { data: userData } = await authenticateUser({
      variables: {
        email,
        password,
      },
    });
    userData.authenticate.token &&
      localStorage.setItem("accessToken", userData.authenticate.token);
    if (userData.authenticate.user.userRole === "Lecturer") {
      navigate("/lab/home-page");
    } else {
      navigate("/lab/student-home-page");
    }
  };
  return (
    <Grid container item>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <TextField
          id="standard-basic"
          label="Email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Email"
          placeholder="Enter Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          OurLocalLogin2
        </Button>
      </Grid>
    </Grid>
  );
}
