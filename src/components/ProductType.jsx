import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import { addNew, deleteSvg } from "./svg";
import Layout from "./Layout";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <div className="pt-9 pl-20 ">
        <div className="pt-9 pl-20">
          <p className="text-base leading-4 font-medium ">
            Product type per category
          </p>

          <div className="mt-5 border-2 max-w-[759px]">
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                height: 224,
              }}
            >
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                <Tab
                  label="Print Only"
                  className="hover:!bg-[#D9D9D9] "
                  {...a11yProps(0)}
                />
                <Tab
                  label="Print and Mail"
                  className="hover:!bg-[#D9D9D9] "
                  {...a11yProps(1)}
                />
                <Tab
                  label="Item Three"
                  className="hover:!bg-[#D9D9D9] "
                  {...a11yProps(2)}
                />
              </Tabs>
              <TabPanel value={value} index={0}>
                {/* Item One */}
                <div className="flex flex-col gap-5 pl-10 ">
                  <div className="flex items-center gap-3 ">
                    <TextField
                      required
                      id="outlined-basic"
                      label="Postcards"
                      className=" w-[452px]"
                    />
                    <div className=" w-9 h-9 hover:bg-[#F0F0F0] flex items-center justify-center rounded-full">
                      {" "}
                      {deleteSvg}
                    </div>
                  </div>
                  <Button
                    variant="contained"
                    className="!bg-[#F0F0F0] w-[450px]"
                  >
                    {addNew}
                  </Button>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className="flex flex-col gap-5 pl-10 ">
                  <div className="flex items-center gap-3 ">
                    <TextField
                      required
                      label="Postcards"
                      id="outlined-basic"
                      className=" w-[452px]"
                    />
                    <div className=" w-9 h-9 hover:bg-[#F0F0F0] flex items-center justify-center rounded-full">
                      {" "}
                      {deleteSvg}
                    </div>
                  </div>
                  <Button
                    variant="contained"
                    className="!bg-[#F0F0F0] w-[450px]"
                  >
                    {addNew}
                  </Button>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <div className="flex flex-col gap-5 pl-10">
                  <div className="flex items-center gap-3 ">
                    <TextField
                      required
                      label="Postcards"
                      id="outlined-basic"
                      placeholder="Postcards"
                      className=" w-[452px]"
                    />
                    <div className=" w-9 h-9 hover:bg-[#F0F0F0] flex items-center justify-center rounded-full">
                      {" "}
                      {deleteSvg}
                    </div>
                  </div>
                  <Button
                    variant="contained"
                    className="!bg-[#F0F0F0] w-[450px]"
                  >
                    {addNew}
                  </Button>
                </div>
              </TabPanel>
            </Box>
          </div>
          <div className=" flex justify-end pt-7">
            <Button
              variant="outlined"
              className="!text-black hover:!border-gray-500 !border-black !normal-case !text-base !font-bold !tracking-[0.16px]"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
