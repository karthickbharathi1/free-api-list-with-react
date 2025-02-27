import React from "react";
import { Box } from "@mui/material";
import NavBar from "../core/main/navigation/NavBar";
import ApiListings from "./apiListings/ApiListings";
import ReferenceGuide from "./referenceGuide/ReferenceGuide";
import GettingStarted from "./Gettingstarted";
import Overview from "./Overview";
import Contributors from "./Contributors";

const Documentation = () => {
  return (
    <Box>
      <NavBar link="/Docs" />
      <Contributors />
      <Overview />
      <GettingStarted />
      <ApiListings />
      <ReferenceGuide />
    </Box>
  );
};

export default Documentation;
