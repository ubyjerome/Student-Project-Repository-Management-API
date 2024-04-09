import Project from '../project/project.model';


//Simple Filter

class filter {
  // Search projects by keywords
  async searchByKeywords(keywords: string[]) {
    try {
      const projects = await Project.find({ keywords: { $in: keywords } })
      return projects;
    } catch (error) {
      throw new Error('Could not search projects by keywords');
    }
  }

  // Search projects by title
  async searchByTitle(title: string) {
    try {
      const projects = await Project.find({ title: { $regex: title, $options: 'i' } })
      return projects;
    } catch (error) {
      throw new Error('Could not search projects by title');
    }
  }

  // Search projects by month
  async searchByMonth(month: string) {
    try {
      const projects = await Project.find({ 'publicationDate.month': month })
      return projects;
    } catch (error) {
      throw new Error('Could not search projects by month');
    }
  }

  // Search projects by year
  async searchByYear(year: number) {
    try {
      const projects = await Project.find({ 'publicationDate.year': year })
      return projects;
    } catch (error) {
      throw new Error('Could not search projects by year');
    }
  }

  // Search projects by author (match at least 3 characters)
  async searchByAuthor(author: string) {
    try {
      const projects = await Project.find({ author: { $regex: author, $options: 'i' } })
      return projects;
    } catch (error) {
      throw new Error('Could not search projects by author');
    }
  }

  // Search projects by supervisor (match at least 3 characters)
  async searchBySupervisor(supervisor: string) {
    try {
      const projects = await Project.find({ supervisors: { $regex: supervisor, $options: 'i' } })
      console.log(`${projects} - Service`);
      
      return projects;
    } catch (error) {
      throw new Error('Could not search projects by supervisor');
    }
  }

  // Search projects by department
  async searchByDepartment(department: string) {
    try {
      const projects = await Project.find({ departmentAcronym: department })
      return projects;
    } catch (error) {
      throw new Error('Could not search projects by department');
    }
  }

  // Search projects by createdBy
  async searchByCreatedBy(createdBy: string) {
    try {
      const projects = await Project.find({ createdBy: createdBy })
      return projects;
    } catch (error) {
      throw new Error('Could not search projects by createdBy');
    }
  }
}

export = filter