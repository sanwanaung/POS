"use client";
import { Box } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TopbarInput from "./TopbarInput";

const ClientTopbar = () => {
  const [borderColor, setBorderColor] = useState<string>("gray");

  const handleInputFocus = () => {
    setBorderColor("red");
  };
  const handleInputBlur = () => {
    setBorderColor("gray");
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          border: "1px solid red",
          fontSize: "1.2rem",
        }}
      >
        Logo
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: `${
            borderColor === "gray" ? "1px" : "2px"
          } solid ${borderColor}`,

          borderRadius: "50px",
          padding: "2px 10px",
          width: "600px",
        }}
      >
        <SearchIcon />
        <TopbarInput onBlur={handleInputBlur} onFocus={handleInputFocus} />
      </Box>
      <Box
        sx={{
          width: "80px",
          border: "1px solid red",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Box>
          <ShoppingBagIcon
            sx={{
              fontSize: "1.8rem",
              cursor: "pointer",
            }}
          />
        </Box>
        <Box>
          <AccountCircleIcon
            sx={{
              fontSize: "1.8rem",
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ClientTopbar;
