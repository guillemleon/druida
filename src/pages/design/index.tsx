import React from "react";
import { Page } from "../../components/layout";
import { PAGE_IDS } from "../../config/variables";
import { designProjects } from "../../config/projects";
import ProjectsContainer from "../../components/projects";
import { useNavigate } from "react-router-dom";

function DesignContainer() {
  const navigate = useNavigate();

  const onClick = (project: any) => {
    navigate(`/design/${project.id}`, {
      state: { ...project, type: PAGE_IDS.design },
    });
  };

  return (
    <ProjectsContainer
      pageId={PAGE_IDS.design as Page}
      data={designProjects}
      title=".·. Projects .·."
      onClick={onClick}
    />
  );
}

export default DesignContainer;
