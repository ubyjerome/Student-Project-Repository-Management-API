import { randomUUID } from "crypto"
import AdminRepo from "./admins.repo"
import { comparePasswords, hashPassword } from "../../utils/passwordHash"
import { Configs } from "../../configs"
import logger from "../../utils/logger"
import { generateToken } from "../../utils/token"

class AdminService {
    private Repo = new AdminRepo()

    async createNewAdmin(newAdminInfo: any) {
        if (!newAdminInfo._id) {
            newAdminInfo._id = `admin_${randomUUID()}`
        }
        newAdminInfo.password = await hashPassword(newAdminInfo.password)
        const createdAdmin = await this.Repo.createNewAdmin(newAdminInfo)
        if (createdAdmin == null) {
            return null
        }
        createdAdmin.password = ""
        return createdAdmin
    }

    async initSuperAdmin() {
        try {
            const suAdminInfo = {
                _id: "super_admin",
                firstName: Configs.superAdmin.firstName,
                lastName: Configs.superAdmin.lastName,
                emailAddress: Configs.superAdmin.email,
                phoneNumber: Configs.superAdmin.phoneNumber,
                password: Configs.superAdmin.password,
                elevated:true
            }
            const currentDefaultSuperAdmin = await this.fetchAdminById(suAdminInfo._id)
            if (currentDefaultSuperAdmin == null) {
                await this.createNewAdmin(suAdminInfo)
                logger.info("Superadmin Creation Success!")
                return
            }
            await this.wipeAdmin(suAdminInfo._id)
            await this.createNewAdmin(suAdminInfo)
            logger.info("Superadmin Creation Success!")

        } catch (error) {
            console.log(error)
            logger.error("Error Creating Superadmin")
            process.exit(1)
        }
    }

    async fetchAdminById(id: string) {
        const admin = await this.Repo.findById(id)
        if (admin == null) {
            return null
        }
        admin.password = ""
        return admin
    }

    async deleteAdmin(id: string) {
        await this.Repo.updateById(id, { deleted: true, deletedAt: new Date() })
    }

    async wipeAdmin(id: string) {
        await this.Repo.deleteById(id)
    }


    ///////////////// AUTH ////////////////
    async login(email: string, password: string) {
        const adminFound = await this.Repo.findByEmailOrPhoneNumber(email)
        if (adminFound == null) {
            return { isSuccess: false, message: "Invalid Login Credentials", data: [] }
        }
        const comparisonResponse = await comparePasswords(password, adminFound.password)
        if (comparisonResponse == false) {
            return { isSuccess: false, message: "Invalid Login Credentials", data: [] }
        }
        adminFound.password = ""
        const token = await generateToken({ _id: adminFound._id }, Configs.project.JWT.duration.long)
        const responseData = { admin: adminFound, token: token }
        return { isSuccess: true, message: "Login Success", data: responseData }

    }
    /////////////////////////////////////////
}
export default AdminService