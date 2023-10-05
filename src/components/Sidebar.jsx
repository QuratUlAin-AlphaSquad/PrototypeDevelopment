// import React from 'react'

import { Button, FormControl, InputLabel, Select } from "@mui/material";
import { sideBarIcon } from "./svg";
import MenuItem from "@mui/material/MenuItem";
// import Heading from "./reuseable/Heading";

const Sidebar = () => {
  return (
    <>
    <div className="h-full">
      <div className="border-r-2 border-[#2D3648] w-[260px] min-h-[984px] h-full bg-[#EDF0F7] pt-6">
        <div className="flex items-center px-10 py-3 gap-2.5">
          {sideBarIcon}

          <Button
            variant="text"
            className="!normal-case !text-sm !leading-6 !tracking-[-0.14px] !text-[#717D96]"
          >
            Products
          </Button>
        </div>

<div className="pr-10">
        <FormControl fullWidth>
          <InputLabel
         
            className="!flex !items-center !gap-5 !px-6 !normal-case !text-sm !leading-6 !tracking-[-0.14px] hover:!text-black !font-medium"
          >
            {" "}
            {sideBarIcon}Settings
          </InputLabel>

          <Select  variant="standard" disableUnderline className="hover:bg-[#E2E7F0]"
          // labelId="demo-simple-select-label"
          // id="demo-simple-select"
          //   value={age}
          // label="Age"
          //   onChange={handleChange}
          >
            <MenuItem value={10}>Categories</MenuItem>
            <MenuItem value={20}>Product Type</MenuItem>
            <MenuItem value={30}>Product Size</MenuItem>
            <MenuItem value={30}>Attributes</MenuItem>
          </Select>
        </FormControl>
      </div>
      </div>
      </div>
    </>
  );
};

export default Sidebar;
