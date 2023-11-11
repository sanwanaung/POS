import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import { CardBtn } from "../button/CardBtn";

const Card = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        width: "18rem",
        height: "23rem",
        cursor: "pointer",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0.4px 0.4px 6px 0.6px rgba(0,0,0,0.2)",
        transition: "box-shadow 0.2s ease-in-out",
        ":hover": {
          boxShadow: "1px 2px 20px 0.8px rgba(0,0,0,0.2)",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          flexBasis: "65%",
          height: "65%",
          bgcolor: "red",
          position: "relative",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
      >
        <Image
          src={
            "https://i.pinimg.com/236x/7a/aa/a5/7aaaa545e00e8a434850e80b8910dd94.jpg"
          }
          alt="card"
          loading="lazy"
          width={800}
          height={800}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "5px",
          }}
          priority={false}
          quality={75}
        />
        <Box
          sx={{
            position: "absolute",
            top: "5%",
            left: "5%",
            width: "4rem",
            height: "1rem",
            borderRadius: "20px",
            fontSize: ".7rem",
            color: "white",
            bgcolor: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1px",
          }}
        >
          50% off
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          flexBasis: "35%",
          height: "35%",
          padding: "1rem",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Box>Thanks a Latte Coffee</Box>
        <Box
          sx={{
            display: "flex",
            gap: "2px",
            fontSize: ".8rem",
          }}
        >
          <Box sx={{ color: "red" }}>$35.4</Box>
          <Box sx={{ display: "flex", gap: "3px", ml: ".3rem" }}>
            <Box
              sx={{
                textDecoration: " line-through",
              }}
            >
              45.3
            </Box>
            <Box>/ kg</Box>
          </Box>
        </Box>
        <Box sx={{ widht: "100%" }}>
          <CardBtn>Hello</CardBtn>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
