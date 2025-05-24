import { useState } from "react";

export default function AddProject({ setNewProject, setProjectList }) {
  const [inputProject, setInputProject] = useState({
    title: "",
    description: "",
    date: "",
    active: true,
    tasks: [],
  });
  const [emptyField, setEmptyFiled] = useState(false);
  const errorTitle = inputProject.title.trim() === "";

  function handleInput(name, value) {
    setInputProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSaveBtn() {
    setProjectList((prev) => [
      ...prev.map((item) => ({ ...item, active: false })),
      inputProject,
    ]);
    setNewProject(false);
  }

  function handleEmptyField() {
    setEmptyFiled(true);
  }

  return (
    <section className="w-full p-24 text-[#5f5f5f]">
      <div className="text-end">
        <button
          onClick={() => setNewProject(false)}
          className="font-bold mr-8 hover:text-[#ff983d] cursor-pointer">
          Cancel
        </button>
        <button
          onClick={
            inputProject.date === "" || errorTitle
              ? handleEmptyField
              : handleSaveBtn
          }
          className="cursor-pointer py-3 px-6 text-[#ff983d] border-2 border-[#ff983d] font-bold rounded-[7px] mt-10 hover:bg-[#ffe8d5]">
          Save
        </button>
      </div>
      <div>
        <div className="font-bold text-[18px]">TITLE</div>
        <input
          className="bg-[#fff8f2] text-xl font-light py-3 px-6 rounded-md w-full mt-2 hover:border-2 hover:border-[#ff983d] focus:outline-none"
          inputMode="text"
          onChange={(e) => handleInput("title", e.target.value)}
        />
        {emptyField && errorTitle && (
          <div className="mt-1 text-[#fd7f11]">Title cannot be empty!</div>
        )}
        <div className="font-bold text-[18px] mt-6">DESCRIPTION</div>
        <textarea
          className="bg-[#fff8f2] text-xl font-light py-3 px-6 rounded-md w-full mb-6 mt-2 hover:border-2 hover:border-[#ff983d] focus:outline-none h-28"
          inputMode="text"
          onChange={(e) => handleInput("description", e.target.value)}
        />
        <div className="font-bold text-[18px]">DUE DATE</div>
        <input
          className="bg-[#fff8f2] text-xl font-light py-3 px-6 rounded-md w-full mt-2 hover:border-2 hover:border-[#ff983d] focus:outline-none"
          type="date"
          onChange={(e) => handleInput("date", e.target.value)}
        />
        {emptyField && inputProject.date === "" && (
          <div className="mt-1 text-[#fd7f11]">Due date cannot be empty!</div>
        )}
      </div>
    </section>
  );
}
