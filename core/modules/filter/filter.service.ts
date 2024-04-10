import filterRepo from "./filter.repo"
import { validateSearchKey } from "./dto"
//Simple Filter

class filter {
  private repo = new filterRepo()
  async dynamicSearch(searchKey: any, searchBy: any) {
    if (searchBy == "title") {
      validateSearchKey("string", searchKey)
      return this.repo.searchByTitle(searchKey)
    }
    if (searchBy == "keywords") {
      validateSearchKey("object", searchKey)
      return this.repo.searchByKeywords(searchKey)
    }
    if (searchBy == "month") {
      validateSearchKey("string", searchKey)
      return this.repo.searchByMonth(searchKey)
    }
    if (searchBy == "year") {
      validateSearchKey("string", searchKey)
      return this.repo.searchByYear(searchKey)
    }
    if (searchBy == "author") {
      validateSearchKey("string", searchKey)
      return this.repo.searchByAuthor(searchKey)
    }
    if (searchBy == "supervisors") {
      validateSearchKey("string", searchKey)
      return this.repo.searchBySupervisor(searchKey)
    }
    if (searchBy == "createdBy") {
      validateSearchKey("string", searchKey)
      return this.repo.searchByCreatedBy(searchKey)
    }
  }
}

export = filter