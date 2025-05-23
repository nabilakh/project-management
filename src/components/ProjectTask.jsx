import taskImg from "../../public/task.png";

export default function ProjectTask({ setNewProject }) {
  return (
    <section className="flex justify-center w-full mt-36 text-[#5f5f5f]">
      <div className="text-center">
        <img src={taskImg} width={150} className="mx-auto" />
        <h2 className="font-bold text-4xl mt-4 ">No Project Selected</h2>
        <p className="text-xl mt-7">
          Select a project or get started with a new one
        </p>
        <button
          onClick={() => setNewProject(true)}
          className="cursor-pointer py-3 px-6 text-[#ff983d] border-2 border-[#ff983d] font-bold rounded-[7px] mt-10 hover:bg-[#ffe8d5]">
          Create new project
        </button>
      </div>
    </section>
  );
}
