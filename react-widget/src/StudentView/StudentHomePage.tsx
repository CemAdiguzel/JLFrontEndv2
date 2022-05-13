import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Tabs, Button, Grid } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import StudentExamList from "./StudentExamList";
import StudentAssignmentList from "./StudentAssignmentList";
import { useNavigate } from "react-router-dom";

function TabPanel(props: {
  [x: string]: any;
  children: any;
  value: any;
  index: any;
}) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid item>
          <Typography>{children}</Typography>
        </Grid>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabnav: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
  },
}));

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function StudentHomePage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };
  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };
  return (
    <Grid container>
      <Grid item xs={12} className={classes.tabnav}>
        <Grid item xs={2}>
          <Button
            variant="outlined"
            style={{ background: "orange", color: "#fff" }}
            onClick={handleLogOut}
          >
            Logout
          </Button>
        </Grid>
        <Grid item xs={10}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Assign" {...a11yProps(0)} />
              <Tab label="Exam" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <TabPanel
          value={value}
          index={0}
          style={{ width: "100%", padding: 12 }}
        >
          <StudentAssignmentList />
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          style={{ width: "100%", padding: 12 }}
        >
          <StudentExamList />
        </TabPanel>
      </Grid>
    </Grid>
  );
}
