import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "./TabPanel";
import UpdatesTab from "./UpdatesTab";
import CommentsTab from "./CommentsTab";
import TopDonators from "./TopDonatorsTab";
import AllDonators from "./AllDonatorsTab";
import DonatedByOrganizationsTab from "./DonatedByOrganizationTab";

const StyledTabs = ({ items }) => {
  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    />
  ))({
    "& .MuiTabs-indicator": {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#f3f3f3",
    },
  });
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      fontFamily: "lato !important",
      fontWeight: 700,
      fontSize: theme.typography.pxToRem(20),
      marginRight: theme.spacing(1),
      color: "#555b6e",
      "&.Mui-selected": {
        color: "#f3f3f3",
      },
      "&.Mui-focusVisible": {
        backgroundColor: "#555b6e",
      },
    })
  );

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          bgcolor: "#89b0ae",
          maxHeight: "600px",
          overflow: "auto",
          borderRadius: "10px",
        }}
      >
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs"
          centered
        >
          {items.map((label, id) => (
            <StyledTab label={label} value={id} key={id} />
          ))}
        </StyledTabs>
        <TabPanel value={value} index={0}>
          {items[value] === "Updates" && <UpdatesTab />}
          {items[value] === "Top Donators" && <TopDonators></TopDonators>}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {items[value] === "Comments" && <CommentsTab />}
          {items[value] === "All Donators" && <AllDonators></AllDonators>}
        </TabPanel>
        <TabPanel value={value} index={2}>
          <DonatedByOrganizationsTab></DonatedByOrganizationsTab>
        </TabPanel>
        <Box sx={{ p: 3 }} />
      </Box>
    </Box>
  );
};

export default StyledTabs;
