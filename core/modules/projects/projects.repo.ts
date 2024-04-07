import Project from './projects.model';

// Create a new project
async function createProject(projectData: any): Promise<any> {
  try {
    const project = new Project(projectData);
    const savedProject = await project.save();
    return savedProject;
  } catch (error) {
    throw new Error('Could not create project');
  }
}

// Get all projects
async function getAllProjects(): Promise<any> {
  try {
    const projects = await Project.find().populate('ref.Departments ref.Admins createdBy');
    return projects;
  } catch (error) {
    throw new Error('Could not fetch projects');
  }
}

// Get project by ID
async function getProjectById(id: string): Promise<any> {
  try {
    const project = await Project.findById(id).populate('ref.Departments ref.Admins createdBy');
    return project;
  } catch (error) {
    throw new Error('Could not fetch project');
  }
}

// Update project by ID
async function updateProject(id: string, projectData: any): Promise<any> {
  try {
    const updatedProject = await Project.findByIdAndUpdate(id, projectData, { new: true });
    return updatedProject;
  } catch (error) {
    throw new Error('Could not update project');
  }
}

// Delete project by ID
async function deleteProject(id: string): Promise<any> {
  try {
    const deletedProject = await Project.findByIdAndDelete(id);
    return deletedProject;
  } catch (error) {
    throw new Error('Could not delete project');
  }
}

export { createProject, getAllProjects, getProjectById, updateProject, deleteProject };