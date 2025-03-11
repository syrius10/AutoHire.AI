import { useDispatch } from "react-redux";
import { addJob } from "../slices/jobsSlice";
import { useState } from "react";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handlePostJob = () => {
    if (title.trim() !== "") {
      dispatch(addJob({ title }));
      setTitle("");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Post a Job</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Job Title"
        className="border p-2 w-full mt-2"
      />
      <button
        onClick={handlePostJob}
        className="mt-3 p-2 bg-blue-600 text-white"
      >
        Post Job
      </button>
    </div>
  );
};

export default PostJob;
