import AdminModel from "./admins.model"

class AdminRepo {
  private model = AdminModel
  async createNewAdmin(newAdminInfo: any) {
    let queryResponse = await this.model.create(newAdminInfo)
    return await this.findByEmailOrPhoneNumber(newAdminInfo.emailAddress)
  }

  async findByEmailOrPhoneNumber(query: string) {
    const admin = await this.model.findOne({
      $or: [{ emailAddress: query }, { phoneNumber: query }],
    });
    return admin;
  }

  async findById(id: string) {
    const admin = await this.model.findById(id)
    return admin
  }

  async updateById(id: string, data: any) {
    await this.model.findByIdAndUpdate(id, data)
  }

  async deleteById(id:string){
    await this.model.findByIdAndDelete(id)
  }
}
export default AdminRepo