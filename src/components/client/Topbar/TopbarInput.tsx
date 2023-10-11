"use client";
import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const TopbarInputStyle = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    border: "none",
    padding: "6px 8px",
    outline: "none",
  },
}));

interface TopbarInputTypes {
  onFocus: () => void;
  onBlur: () => void;
}

const TopbarInput: FC<TopbarInputTypes> = ({ onBlur, onFocus }) => {
  return (
    <TopbarInputStyle
      placeholder="Hello"
      onFocus={() => {
        onFocus();
      }}
      onBlur={() => {
        onBlur();
      }}
      sx={{
        width: "100%",
      }}
    />
  );
};

export default TopbarInput;
