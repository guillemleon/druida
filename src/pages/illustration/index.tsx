import React from "react";
import { Page } from "../../components/layout";
import { PAGE_IDS } from "../../config/variables";
import { illustrationProjects } from "../../config/projects";
import ProjectsContainer from "../../components/projects";
import { useNavigate } from "react-router-dom";

function IllustrationContainer() {
  const navigate = useNavigate();

  const onClick = (project: any) => {
    navigate(`/illustration/${project.id}`, {
      state: { ...project, type: PAGE_IDS.illustration },
    });
  };

  return (
    <ProjectsContainer
      pageId={PAGE_IDS.illustration as Page}
      data={illustrationProjects}
      title=".·. Art .·."
      onClick={onClick}
    />
  );
}

export default IllustrationContainer;
