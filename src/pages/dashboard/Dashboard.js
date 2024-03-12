import React from "react";
import { Box, Grid, useTheme } from "@mui/material";
import CloudIcon from "../../assets/icons/CloudIcon";
import DoneIcon from "../../assets/icons/DoneIcon";
import ErrorIcon from "../../assets/icons/ErrorIcon";
import HourGlassIcon from "../../assets/icons/HourGlassIcon";
import MoneyIcon from "../../assets/icons/MoneyIcon";
import UserAddIcon from "../../assets/icons/UserAddIcon";
import UserBigIcon from "../../assets/icons/UserBigIcon";
import CustomerList from "./page-sections/customerList";
import LeadCard from "./page-sections/LeadCard";
import LeadVSCustomer from "./page-sections/LeadVSCustomer";
import LongCard from "./page-sections/LongCard";
import Overviews from "./page-sections/Overviews";
import ProjectStatus from "./page-sections/ProjectStatus";
import Tasks from "./page-sections/Tasks";

const Dashboard = () => {
  const theme = useTheme();
  const list1 = [
    {
      id: 1,
      amount: 80,
      Icon: MoneyIcon,
      title: "Invoice Payments",
      color: theme.palette.primary.main,
    },
    {
      id: 2,
      amount: 150,
      Icon: CloudIcon,
      title: "Project In Progress",
      color: theme.palette.info.main,
    },
    {
      id: 3,
      amount: 22,
      Icon: HourGlassIcon,
      title: "Task Not Finished",
      color: theme.palette.text.disabled,
    },
  ];
  const list2 = [
    {
      id: 1,
      amount: 150,
      Icon: UserAddIcon,
      title: "New Leads",
      color: theme.palette.primary.main,
    },
    {
      id: 2,
      amount: 200,
      Icon: UserBigIcon,
      title: "Open Leads",
      color: theme.palette.warning.main,
    },
    {
      id: 3,
      amount: 350,
      Icon: DoneIcon,
      title: "Won Leads",
      color: theme.palette.info.main,
    },
    {
      id: 4,
      amount: 20,
      Icon: ErrorIcon,
      title: "Lost Leads",
      color: theme.palette.error.main,
    },
  ];
  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <LeadCard />
        </Grid>

        <Grid item md={8} xs={12}>
          <LongCard list={list1} />
        </Grid>

        <Grid item md={8} xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <LeadVSCustomer />
            </Grid>

            <Grid item xs={12}>
              <LongCard list={list2} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={4} xs={12}>
          <ProjectStatus />
        </Grid>

        <Grid item md={8} xs={12}>
          <Overviews />
        </Grid>

        <Grid item md={4} xs={12}>
          <Tasks />
        </Grid>

        <Grid item xs={12}>
          <CustomerList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
