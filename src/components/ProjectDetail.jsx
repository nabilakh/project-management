import { forwardRef, useImperativeHandle, useRef } from "react";

const ProjectDetail = forwardRef(({ projectList, setProjectList }, ref) => {
  const detail = projectList.find((itm) => itm.active);
  const date = new Date(detail.date);
  const detailIdx = projectList.findIndex((itm) => itm.active);
  const inputTask = useRef();

  useImperativeHandle(ref, () => ({
    clear: () => {
      inputTask.current.value = "";
    },
  }));

  const formatted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  function handleTasks(idx) {
    setProjectList((prev) =>
      prev.map((itm, i) => {
        let newTasks = [...itm.tasks];

        idx !== undefined
          ? (newTasks = newTasks.filter((item, index) => idx !== index))
          : newTasks.push(inputTask.current.value);

        return detailIdx === i ? { ...itm, tasks: newTasks } : itm;
      }),
    );
  }

  function handleDeleteProject() {
    setProjectList((prev) => prev.filter((itm, idx) => idx !== detailIdx));
  }

  return (
    <section className="w-full text-[#5f5f5f] px-24 py-36">
      <div className="flex justify-between">
        <h3 className="text-4xl font-semibold">{detail.title}</h3>
        <button
          onClick={handleDeleteProject}
          className="font-semibold text-xl text-[#ff983d] hover:text-2xl cursor-pointer">
          Delete
        </button>
      </div>
      <div className="text-[#929292] mt-3">{formatted}</div>
      <div className="whitespace-pre-line text-xl mt-8">
        {detail.description}
      </div>
      <div className="border-2 border-[#fff1e5] my-10 "></div>
      <h3 className="text-4xl font-semibold">Tasks</h3>
      <input
        className="bg-[#fff8f2] my-6 w-[450px] text-xl font-light py-3 px-6 rounded-md hover:border-2 hover:border-[#ff983d] focus:outline-none"
        inputMode="text"
        ref={inputTask}
      />
      <label
        onClick={() => inputTask.current.value.trim() !== "" && handleTasks()}
        className="ml-6 font-semibold cursor-pointer hover:text-[#ff983d]">
        Add Task
      </label>
      {detail.tasks.length > 0 ? (
        detail.tasks.map((itm, idx) => (
          <div
            className="flex justify-between border-b-2 border-[#ffd2aa] text-xl mt-5 pb-2"
            key={idx}>
            {itm}
            <div
              onClick={() => handleTasks(idx)}
              className="font-semibold hover:text-[#ff983d] cursor-pointer">
              Clear
            </div>
          </div>
        ))
      ) : (
        <div className="text-xl">This project does not have any tasks yet.</div>
      )}
    </section>
  );
});

export default ProjectDetail;
