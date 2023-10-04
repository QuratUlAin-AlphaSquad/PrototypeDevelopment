import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
// import React from 'react'
import { sideBarIcon } from './svg'

const Dropdown = () => {
  return (
    <>
               
<FormControl fullWidth>
    
    <InputLabel className="!flex !items-center !gap-5 !px-6"> {sideBarIcon}Settings</InputLabel>
    
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
    </>
  )
}

export default Dropdown