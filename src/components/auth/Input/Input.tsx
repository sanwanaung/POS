"use client";
import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { InputLabel } from "@mui/material";
import { InputProps } from "@/lib/auth/type";
import { useFormContext } from "react-hook-form";
import InputErrorMessage from "./InputErrorMessage";

const CustomInputStyle = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: "10px",
    width: "100%",
    display: "block",
    fontSize: ".9rem",
    border: "1px solid rgba(0,0,0,0.2)",
    transition: "all .1s ease-in-out",
    ":hover": {
      border: "1px solid rgba(0,0,0,0.8)",
      borderRadius: "4px",
    },
    ":focus": {
      border: "1.5px solid red",
    },
    borderRadius: "4px",
  },
  "& input::placeholder": {
    fontSize: "14px",
    opacity: "0.4",
  },
}));

const CustomInput: FC<InputProps> = ({
  errors,
  label,
  name,
  placeholder,
  type,
}) => {
  const { register } = useFormContext();

  return (
    <>
      <InputLabel
        sx={{
          fontSize: ".9rem",
          fontWeight: "bold",
          mb: "0.1rem",
          ml: "0.2rem",
        }}
      >
        {label}
      </InputLabel>
      <CustomInputStyle
        sx={{ width: "100%" }}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className={`${
          Object.prototype.hasOwnProperty.call(errors, name) && "error"
        }`}
      />
      <InputErrorMessage errors={errors} name={name} />
    </>
  );
};

export default CustomInput;
