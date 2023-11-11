"use client";
import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import Buttton from "@mui/material/Button";

const CustomizeCardBtn = styled(Buttton)({
  textTransform: "none",
  fontSize: ".8rem",
  lineHeight: 1.2,
  width: "100%",
  color: "red",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all .2s ease-in-out",
  border: "1px solid rgba(255, 0, 0, 0.5)",
  ":hover": {
    border: "1px solid rgba(255, 0, 0, 1)",
    background: "rgba(255, 0, 0, 0.05)",
  },
});

interface Props {
  children: React.ReactNode;
}

export const CardBtn: FC<Props> = ({ children }) => {
  return <CustomizeCardBtn>{children}</CustomizeCardBtn>;
};
