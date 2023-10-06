// import React from 'react'

import { Button, TextField } from "@mui/material";
import { addNew, deleteSvg } from "./svg";
import { useState } from "react";
import Layout from "./Layout";

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
    <Layout>
      <div className=" pt-[37px] pl-20 flex flex-col gap-8 max-w-[600px] w-full">
      <p className="text-base leading-4 font-medium">Categories</p>

          {
          data.map((val, i) =>
          <div key={data.i} className="flex gap-3 ">
            <TextField className="border-2 max-w-[452px] w-full" required
            id="outlined-basic"
            label="Print Only" name="fname" value={val.fname} onChange={(e)=>handleChange(e,i)} />
            {/* <input name="lname"  className="border-2" value={val.fname} onChange={(e)=>handleChange(e,i)} /> */}
            <div className="w-9 h-9 hover:bg-[#F0F0F0] flex items-center justify-center rounded-full">
<Button  onClick={()=>handleDelete(i)}> {" "}
            {deleteSvg}</Button></div>
          </div>
          )
        }
                  <Button onClick={handleClick}     variant="contained"
            className="!bg-[#F0F0F0] max-w-[452px] w-full">  {addNew}</Button>
                  <div className="flex justify-end max-w-[452px]">
            <Button
              variant="outlined"
              className="!text-black hover:!border-gray-500 !border-black  max-w-[38px] !flex !content-end !normal-case !text-base !font-bold !tracking-[0.16px]"
            >
              Save
            </Button>
          </div>

      </div>
    </Layout>
  );
};

export default Content;
