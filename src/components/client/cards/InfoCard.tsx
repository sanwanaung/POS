import { Box } from "@mui/material";
import React from "react";
import { InfoCardItems } from "../../design";

const InfoCard = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        height: "max-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {InfoCardItems.map((item) => {
        return (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              alignItems: "center",
              flexBasis: {
                xs: "100%",
                sm: "48%",
                md: "48%",
                lg: "22%",
              },
              height: "5rem",
              padding: "14px 18px",
              bgcolor: "white",
              boxShadow: "0 1px 20px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
              gap: "10px",
              flexShrink: 0,
            }}
          >
            <Box>
              {
                <item.icon
                  sx={{
                    fontSize: "2.1rem",
                  }}
                />
              }
            </Box>
            <Box>
              <Box
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Box>
              <Box
                sx={{
                  fontSize: ".9rem",
                }}
              >
                {item.subtitle}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default InfoCard;
