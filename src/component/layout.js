import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core/";
import Copyright from "./copyright";
import Header from "./header";
import Dashboard from "./views/dashboard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function Layout() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {/* Header */}
      <Header />
      {/* Main View Contaniner  */}
      <main className={classes.content}>
        <Box className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {/* Here we can add route view and It will be redirect to component based on menu selection. */}
          {/* Dasboard Component */}
          <Dashboard />
          {/* Copyright Component */}
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </Box>
  );
}
