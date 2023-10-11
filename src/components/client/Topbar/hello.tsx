import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";

const hello = () => {
  return (
    <Box>
      <SearchIcon />
      <input placeholder="hello" />
    </Box>
  );
};

export default hello;
