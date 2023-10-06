// import React from 'react'

import { Button, TextField } from "@mui/material";
import { addNew, deleteSvg } from "./svg";
import { useState } from "react";

const Content = () => {
const [data, setData] = useState([{fname:"", lname:""}])

const handleClick=()=>{
  setData([...data, {fname:"", lname:""}])
}
const handleChange=(e,i)=>{
  const {name,value} = e.target
  // console.log(e.target)
  const onchangeVal = [...data]
  onchangeVal[i][name]=value
  setData(onchangeVal)
}
const handleDelete=(i)=>{
  const deleteVal = [...data]
  deleteVal.splice(i,1)
  setData(deleteVal)
}
  return (
    <>
      <div className="pt-[37px] pl-20 flex flex-col gap-8 max-w-[600px] w-full">
        <p className="text-base leading-4 font-medium">Categories</p>
        
        <div className="flex items-center gap-3">
          {/* Map Input & del btn */}
          
          <TextField
            required
            id="outlined-basic"
            label="Print Only"
            className="max-w-[452px] w-full"
          />
          <div className=" w-9 h-9 hover:bg-[#F0F0F0] flex items-center justify-center rounded-full">
            {" "}
            {deleteSvg}
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <Button
            variant="contained"
            className="!bg-[#F0F0F0] max-w-[452px] w-full"
            // onClick={}
          >
            {addNew}
          </Button>
          <div className="flex justify-end max-w-[452px]">
            <Button
              variant="outlined"
              className="!text-black hover:!border-gray-500 !border-black  max-w-[38px] !flex !content-end !normal-case !text-base !font-bold !tracking-[0.16px]"
            >
              Save
            </Button>
          </div>
        </div>
      </div>


      <div>
        
          {
          data.map((val, i) =>
          <div key={data.i}>
            <input className="border-2" name="fname" value={val.fname} onChange={(e)=>handleChange(e,i)} />
            {/* <input name="lname" value={val.fname} onChange={(e)=>handleChange(e,i)} /> */}
<button onClick={()=>handleDelete(i)}>Delete</button>
          </div>
          )
        }
                  <button onClick={handleClick}> Add</button>

      </div>
    </>
  );
};

export default Content;
