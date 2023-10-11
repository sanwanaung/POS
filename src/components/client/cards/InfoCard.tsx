import { Box } from "@mui/material";
import React from "react";
import { InfoCardItems } from "../../design";

const InfoCard = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        height: "10rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
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
              flexBasis: "24%",
              height: "5rem",
              padding: "14px 18px",
              bgcolor: "white",
              boxShadow: "0 1px 20px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
              gap: "10px",
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
