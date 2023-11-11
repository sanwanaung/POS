"use client";
import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const TopbarInputStyle = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    border: "none",
    padding: "6px 8px",
    outline: "none",
    width: "100%",
    display: "block",
  },
}));

interface Props {
  onFocus: () => void;
  onBlur: () => void;
}

const TopbarInput: FC<Props> = ({ onFocus, onBlur }) => {
  return (
    <TopbarInputStyle
      placeholder="Search for...."
      sx={{ width: "100%" }}
      onFocus={() => onFocus()}
      onBlur={() => onBlur()}
    />
  );
};

export default TopbarInput;
