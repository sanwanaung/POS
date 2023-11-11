import Card from "@/components/client/cards/Card";
import Products from "@/components/client/products/Products";
import { Box } from "@mui/material";
import React from "react";

const products = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        p: "1rem",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        mb: "10rem",
      }}
    >
      {/* <Products /> */}
      {[1, 2, 3, 4].map((item) => {
        return <Card key={item} />;
      })}
    </Box>
  );
};

export default products;
