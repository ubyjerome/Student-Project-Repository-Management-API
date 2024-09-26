import AdminModel from "./admins.model"

class AdminRepo {
    private model = AdminModel
    async createNewAdmin(newAdminInfo: any) {
        let queryResponse = await this.model.create(newAdminInfo)
        return await this.findByEmailOrPhoneNumber(newAdminInfo.emailAddress)
    }

    async findByEmailOrPhoneNumber(query: string) {
        const admin = await this.model.findOne({
          $or: [{ emailAddress:query }, { phoneNumber: query }],
        });
        return admin;
      }
}
export default AdminRepo