import { useRef, useState } from "react";
import AddProject from "./components/AddProject";
import ProjectTask from "./components/ProjectTask";
import SideNavbar from "./components/SideNavbar";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const [newProject, setNewProject] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const activeProject = projectList.find((itm) => itm.active);
  const inputTask = useRef();

  return (
    <section className="flex">
      <SideNavbar
        setNewProject={setNewProject}
        projectList={projectList}
        setProjectList={setProjectList}
        inputTask={inputTask}
      />
      {newProject ? (
        <AddProject
          setNewProject={setNewProject}
          setProjectList={setProjectList}
        />
      ) : activeProject ? (
        <ProjectDetail
          projectList={projectList}
          setProjectList={setProjectList}
          ref={inputTask}
        />
      ) : (
        <ProjectTask setNewProject={setNewProject} />
      )}
    </section>
  );
}

export default App;
