import InfoCard from "@/components/client/cards/InfoCard";
import ClientTopbar from "@/components/client/Topbar/ClientTopbar";
import { Box } from "@mui/material";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "#eee",
          width: "100%",
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
          <ClientTopbar />
        </Box>
      </Box>
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
        <Box>
          <InfoCard />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              width: "18rem",
              bgcolor: "#eee",
            }}
          >
            Sidebar
          </Box>
          <>{children}</>
        </Box>
      </Box>
    </Box>
  );
}
