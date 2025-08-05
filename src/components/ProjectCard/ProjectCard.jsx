function ProjectCard({projectName}) {
  return (
    <div>
      <div>Project screenshot</div>
      <div>
        <p>{projectName}</p>
        <div>Tech stack</div>
        <p>description</p>
        <span>
          <button type="button">Code</button>
          <button type="button">Preview</button>
        </span>
      </div>
    </div>
  );
}

export default ProjectCard;
