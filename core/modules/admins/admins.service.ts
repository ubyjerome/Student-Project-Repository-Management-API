import { randomUUID } from "crypto"
import AdminRepo from "./admins.repo"
import { hashPassword } from "../../utils/passwordHash"

class AdminService {
    private Repo = new AdminRepo()
    async createNewAdmin(newAdminInfo: any) {
        newAdminInfo._id=`admin_${randomUUID()}`
        newAdminInfo.password = await hashPassword(newAdminInfo.password)
        const createdAdmin = await this.Repo.createNewAdmin(newAdminInfo)
        if(createdAdmin == null){
            return null
        }
        createdAdmin.password = ""
        return createdAdmin
    }
}
export default AdminService