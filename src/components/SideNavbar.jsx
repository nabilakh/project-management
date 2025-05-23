export default function SideNavbar({
  setNewProject,
  projectList,
  setProjectList,
  inputTask,
}) {
  function handleNavbar(idx) {
    setProjectList((prev) =>
      prev.map((itm, i) => ({ ...itm, active: idx === i })),
    );

    inputTask.current.clear();
  }

  return (
    <nav className="bg-[#ff983d] min-h-screen overflow-y-auto rounded-tr-3xl mt-11 w-[480px] p-11 text-white">
      <div className="text-center mb-9">
        <h2 className="font-bold text-3xl mt-2">YOUR PROJECTS</h2>
        <button
          onClick={() => setNewProject(true)}
          className="cursor-pointer bg-[#ffba7d] py-3 px-6  rounded-[7px] mt-7 hover:bg-[#fd8114]">
          + Add Project
        </button>
      </div>
      <ul>
        {projectList.map((itm, idx) => (
          <li
            key={idx}
            onClick={() => handleNavbar(idx)}
            className={`${
              itm.active ? "bg-[#ffba7d]" : "hover:font-semibold"
            } cursor-pointer text-xl mb-2 py-2 px-4 rounded-sm`}>
            {itm.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}
