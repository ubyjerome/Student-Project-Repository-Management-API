import filterRepo from "./filter.repo"
import { validateSearchKey } from "./dto"
//Simple Filter

class filter {
  private repo = new filterRepo()
  async dynamicSearch(searchKey: any, searchBy: string) {
    if (searchBy == "title") {
      validateSearchKey("string", searchKey, searchBy)
      return this.repo.searchByTitle(searchKey)
    }
    if (searchBy == "keywords") {
      validateSearchKey("object", searchKey, searchBy)
      return this.repo.searchByKeywords(searchKey)
    }
    if (searchBy == "month") {
      validateSearchKey("string", searchKey, searchBy)
      return this.repo.searchByMonth(searchKey)
    }
    if (searchBy == "year") {
      validateSearchKey("string", searchKey, searchBy)
      return this.repo.searchByYear(searchKey)
    }
    if (searchBy == "author") {
      validateSearchKey("string", searchKey, searchBy)
      return this.repo.searchByAuthor(searchKey)
    }
    if (searchBy == "supervisors") {
      validateSearchKey("string", searchKey, searchBy)
      return this.repo.searchBySupervisor(searchKey)
    }
    if (searchBy == "createdBy") {
      validateSearchKey("string", searchKey, searchBy)
      return this.repo.searchByCreatedBy(searchKey)
    }
  }
}

export = filter