import Project from './project.model';

// Search projects by keywords
async function searchByKeywords(keywords: string[]): Promise<any> {
  try {
    const projects = await Project.find({ keywords: { $in: keywords } }).populate('ref.Departments ref.Admins createdBy');
    return projects;
  } catch (error) {
    throw new Error('Could not search projects by keywords');
  }
}

// Search projects by title
async function searchByTitle(title: string): Promise<any> {
  try {
    const projects = await Project.find({ title: { $regex: title, $options: 'i' } }).populate('ref.Departments ref.Admins createdBy');
    return projects;
  } catch (error) {
    throw new Error('Could not search projects by title');
  }
}

// Search projects by month
async function searchByMonth(month: string): Promise<any> {
  try {
    const projects = await Project.find({ 'dateSubmitted.month': month }).populate('ref.Departments ref.Admins createdBy');
    return projects;
  } catch (error) {
    throw new Error('Could not search projects by month');
  }
}

// Search projects by year
async function searchByYear(year: number): Promise<any> {
  try {
    const projects = await Project.find({ 'dateSubmitted.year': year }).populate('ref.Departments ref.Admins createdBy');
    return projects;
  } catch (error) {
    throw new Error('Could not search projects by year');
  }
}

// Search projects by author (match at least 3 characters)
async function searchByAuthor(author: string): Promise<any> {
  try {
    const projects = await Project.find({ author: { $regex: author, $options: 'i' } }).populate('ref.Departments ref.Admins createdBy');
    return projects;
  } catch (error) {
    throw new Error('Could not search projects by author');
  }
}

// Search projects by supervisor (match at least 3 characters)
async function searchBySupervisor(supervisor: string): Promise<any> {
  try {
    const projects = await Project.find({ supervisors: { $regex: supervisor, $options: 'i' } }).populate('ref.Departments ref.Admins createdBy');
    return projects;
  } catch (error) {
    throw new Error('Could not search projects by supervisor');
  }
}

// Search projects by department
async function searchByDepartment(department: string): Promise<any> {
  try {
    const projects = await Project.find({ departmentAcronym: department }).populate('ref.Departments ref.Admins createdBy');
    return projects;
  } catch (error) {
    throw new Error('Could not search projects by department');
  }
}

// Search projects by createdBy
async function searchByCreatedBy(createdBy: string): Promise<any> {
  try {
    const projects = await Project.find({ createdBy: createdBy }).populate('ref.Departments ref.Admins createdBy');
    return projects;
  } catch (error) {
    throw new Error('Could not search projects by createdBy');
  }
}

export {
  searchByKeywords,
  searchByTitle,
  searchByMonth,
  searchByYear,
  searchByAuthor,
  searchBySupervisor,
  searchByDepartment,
  searchByCreatedBy,
};