import Project from './project.model';

class ProjectRepo {

  // Create a new project
  async createProject(projectData: any): Promise<any> {
    try {
      const project = new Project(projectData);
      const savedProject = await project.save();
      return savedProject;
    } catch (error) {
      throw new Error('Could not create project');
    }
  }

  // Get all projects
  async getAllProjects(): Promise<any> {
    try {
      const projects = await Project.find().populate('ref.Departments ref.Admins createdBy');
      return projects;
    } catch (error) {
      throw new Error('Could not fetch projects');
    }
  }

  // Get project by ID
  async getProjectById(id: string): Promise<any> {
    try {
      const project = await Project.findById(id).populate('ref.Departments ref.Admins createdBy');
      return project;
    } catch (error) {
      throw new Error('Could not fetch project');
    }
  }

  // Update project by ID
  async updateProject(id: string, projectData: any): Promise<any> {
    try {
      const updatedProject = await Project.findByIdAndUpdate(id, projectData, { new: true });
      return updatedProject;
    } catch (error) {
      throw new Error('Could not update project');
    }
  }

  // Delete project by ID
  async deleteProject(id: string): Promise<any> {
    try {
      const deletedProject = await Project.findByIdAndDelete(id);
      return deletedProject;
    } catch (error) {
      throw new Error('Could not delete project');
    }
  }
}


export default ProjectRepo