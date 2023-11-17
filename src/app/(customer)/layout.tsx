import InfoCard from "@/components/client/cards/InfoCard";
import ClientTopbar from "@/components/layout/Topbar/TopBar";
import { Box } from "@mui/material";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ height: "150vh" }}>
      <ClientTopbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          position: "relative",
          maxWidth: "90%",
          margin: "0 auto",
          maxHeight: "100vh",
        }}
      >
        <Box
          sx={{
            mt: "1rem",
            mb: "1rem",
          }}
        >
          <InfoCard />
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <>{children}</>
        </Box>
      </Box>
    </Box>
  );
}
