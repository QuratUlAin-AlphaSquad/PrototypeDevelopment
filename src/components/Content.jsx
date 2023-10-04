// import React from 'react'

import { Button, TextField } from "@mui/material"
import { addNew } from "./svg"

const Content = () => {
  return (
    <>
        <div className="pt-[37px] pl-20 flex flex-col gap-8">
            <p className="text-base leading-4 font-medium">Categories</p>
            <TextField id="outlined-basic" placeholder="Print Only" />
            <Button variant="contained" className="!bg-[#F0F0F0]">{addNew}</Button>
            <div className="flex items-">
            <Button variant="outlined" className="!text-black !border-black !border-2 max-w-[38px] ">Save</Button>

            </div>
        </div>

    </>
  )
}

export default Content