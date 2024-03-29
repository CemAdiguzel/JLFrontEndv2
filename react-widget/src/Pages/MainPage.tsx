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
    console.log("userData", userData?.authenticate?.user?.id);
    const loggedInUserId = userData?.authenticate?.user?.id;
    userData.authenticate.token &&
      localStorage.setItem("accessToken", userData.authenticate.token);
    if (userData.authenticate.user.userRole === "Lecturer") {
      navigate("/lab/home-page", {
        state: {
          userId: loggedInUserId,
        },
      });
    } else {
      navigate("/lab/student-home-page", {
        state: {
          userId: loggedInUserId,
        },
      });
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
          flexWrap: "wrap",
        }}
      >
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            variant="outlined"
            label="User Name"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            variant="outlined"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            style={{ background: "orange", color: "#fff" }}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
