"use client";
import { Box } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TopbarInput from "./TopbarInput";
import { useScrollPosition } from "@/lib/useScrollPosition";

const TopBar = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const { scrollPosition } = useScrollPosition();

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        width: "100%",
        boxShadow: `${
          scrollPosition > 0 ? "0px 1px 8px 2px rgba(0,0,0,0.2)" : ""
        }`,
      }}
    >
      <Box
        sx={{
          height: "5rem",
          width: "90%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
        }}
      >
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
              border: isFocus ? "2px solid red" : "1px solid gray",
              borderRadius: "50px",
              padding: "2px 10px",
              width: "600px",
              transition: "all 0.2s ease-in-out",
              ":hover": {
                border: isFocus ? "2px solid red" : "1px solid red",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SearchIcon />
            </Box>
            <Box sx={{ width: "100%" }}>
              <TopbarInput
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
              />
            </Box>
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
      </Box>
    </Box>
  );
};

export default TopBar;
