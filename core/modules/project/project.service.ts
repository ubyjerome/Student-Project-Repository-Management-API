import { randomUUID } from "crypto"
import ProjectRepo from "./project.repo"

class ProjectService {
    private repo = new ProjectRepo()
    async createNew(projectInfo: any) {
        projectInfo._id = randomUUID()
        const response = await this.repo.createProject(projectInfo)
        return response
    }
    
    getAll() { }
    getById() { }

    async updateOne(projectId: string, updateInfo: any) {
        const project = await this.repo.getProjectById(projectId)
        if (!project.updateInfo[0]) {
            return false
        }
        this.repo.updateProject(projectId, updateInfo)
        return true
    }

    async deleteOne(projectId: string) {
        await this.repo.updateProject(projectId, { isDeleted: true })
    }
}
export default ProjectService