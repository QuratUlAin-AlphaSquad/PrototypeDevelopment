// import React from 'react'

import { Button, FormControl, InputLabel, Select } from "@mui/material"
import { sideBarIcon } from "./svg"
import MenuItem from '@mui/material/MenuItem';
// import Heading from "./reuseable/Heading";


const Sidebar = () => {
  return (

    <>
        <div className="border-r-2 border-[#2D3648] w-[260px] h-[884px] bg-[#EDF0F7] pt-6">
           <div className="flex items-center px-10 py-3 gap-2.5">
           {sideBarIcon}
           <Button variant="text" className="!normal-case !text-sm !leading-6 !tracking-[-0.14px] !text-[#717D96]">Products</Button>
{/* <Dropdown /> */}


           </div>
           
<FormControl fullWidth>
    
<InputLabel className="!flex !items-center !gap-5 !px-6 !normal-case !text-sm !leading-6 !tracking-[-0.14px] hover:!text-black !font-medium"> {sideBarIcon}Settings</InputLabel>

<Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        //   value={age}
          label="Age"
        //   onChange={handleChange}
        >
          <MenuItem value={10}>Categories</MenuItem>
          <MenuItem value={20}>Product Type</MenuItem>
          <MenuItem value={30}>Product Size</MenuItem>
          <MenuItem value={30}>Attributes</MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}

        </Select>
        </FormControl>
            Sidebar
            </div>


    </>
  )
}

export default Sidebar