import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import TabPanel, { a11yProps } from "./TabPanel";
import { TABS } from "../../utils/config";

const tabsStyles = {
  position: "fixed",
  top: 64,
  backgroundColor: "#fff",
  width: "100%",
  zIndex: 90
};

export default function Newstabs({ tabValue, handleChangeTabs, children }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider"
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleChangeTabs}
          aria-label="basic tabs example"
          sx={tabsStyles}
        >
          {TABS.map((tab, index) => (
            <Tab
              sx={{
                fontSize: "2rem"
              }}
              key={tab}
              label={tab}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      {TABS.map((tab, index) => (
        <TabPanel key={tab} value={tabValue} index={index}>
          {children}
        </TabPanel>
      ))}
    </Box>
  );
}
