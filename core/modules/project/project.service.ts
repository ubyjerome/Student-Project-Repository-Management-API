import { randomUUID } from "crypto"
import ProjectRepo from "./project.repo"

class ProjectService {
    private repo = new ProjectRepo()
    async createNew(projectInfo: any) {
        projectInfo._id = randomUUID()
        const response = await this.repo.createProject(projectInfo)
        return response
    }

    async getAll() {
        const projectsFound = await this.repo.getAllProjects()
        return projectsFound
    }
    async getById(projectId: string) {
        const project = await this.repo.getProjectById(projectId)
        return project
    }

    async updateOne(projectId: string, updateInfo: any) {
        this.repo.updateProject(projectId, updateInfo)
    }

    async deleteOne(projectId: string) {
        await this.repo.updateProject(projectId, { deleted: true, deletedAt: new Date() })
    }

    async getOneByTitle(title:string){
        const projectReturned = await this.repo.getProjectByTitle(title)
        return projectReturned
    }
}
export default ProjectService