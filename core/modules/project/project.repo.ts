import Project from './project.model';

class ProjectRepo {

  // Create a new project
  async createProject(projectData: any): Promise<any> {
      const project = new Project(projectData);
      const savedProject = await project.save();
      return savedProject;
  }

  // Get all projects
  async getAllProjects(): Promise<any> {
      const projects = await Project.find();
      return projects
  }

  // Get project by ID
  async getProjectById(id: string): Promise<any> {
      const project = await Project.findById(id);
      return project;
  }

  // Update project by ID
  async updateProject(id: string, projectData: any): Promise<any> {
      const updatedProject = await Project.findByIdAndUpdate(id, projectData, { new: true });
      return updatedProject;    
  }

  // Delete project by ID
  async deleteProject(id: string): Promise<any> {
      const deletedProject = await Project.findByIdAndDelete(id);
      return deletedProject;
  }
}


export default ProjectRepo