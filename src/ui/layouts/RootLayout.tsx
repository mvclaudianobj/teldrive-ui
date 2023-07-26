import FixedBottomNavigation from "@/ui//components/BottomNav"
import { Box, Container } from "@mui/material"

import { useSession } from "@/ui/hooks/useSession"
import NavDrawer from "@/ui/components/Drawer"
import Header from "@/ui/components/Header"

const drawerWidth = 250

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data: session } = useSession()
  return (
    <>
      <Box sx={{ position: "fixed", inset: 0, display: "flex" }}>
        {session && (
          <>
            <Box
              component="nav"
              sx={{
                width: { md: drawerWidth },
                flexShrink: { md: 0 },
                display: "block",
                "@media (max-width: 1024px)": {
                  display: "none",
                },
              }}
            >
              <NavDrawer
                PaperProps={{
                  sx: {
                    width: drawerWidth,
                    bgcolor: "background.default",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Box>
            <FixedBottomNavigation />
          </>
        )}

        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Header session={session} />
          <Container
            maxWidth="xl"
            sx={{
              pt: 1,
              marginTop: 8,
              height: "calc(100% - 68px)",
              "@media (max-width: 1024px)": {
                height: "calc(100% - 124px)",
              },
            }}
          >
            {children}
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default RootLayout
