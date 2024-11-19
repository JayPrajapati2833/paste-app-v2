import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

//51:00 min localstor. ma data store nathi thata
const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const pasteId = searchParams.get("pasteId");

  const dispatch = useDispatch();
  const handletoCreate = () => {
    const paste = {
      title,
      value,
      _id: pasteId || Date.now().toString(36), //Aa "alphanumeric" type ni id banavse.
      createdAt: new Date().toISOString(),
    };
    //dispatch through data globally assign kariya
    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

   
    setTitle("");
    setValue("");
    setSearchParams({});
    toast("Paste created Successfully!!");

  };
  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 pl-5 rounded-2xl mt-2 w-[66%]"
        />
        <button className="p-3 rounded-2xl bg-black" onClick={handletoCreate}>
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>
      <div>
        <textarea
          rows={20}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="p-4 min-w-[500px] rounded-2xl mt-4"
          placeholder="Enter content here"
        />
      </div>
    </div>
  );
};

export default Home;
