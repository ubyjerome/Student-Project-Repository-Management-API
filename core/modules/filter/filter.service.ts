import filterRepo from "./filter.repo"

//Simple Filter

class filter {
private repo = new filterRepo()

  async dynamicSearch(searchKey: any, searchBy: any) {

    if (searchBy == "title") {
      return this.repo.searchByTitle(searchKey)
    }
    if (searchBy == "keywords") {
      if(!searchKey[0]){
        return false
      }
      return this.repo.searchByKeywords(searchKey)
    }
    if (searchBy == "month") {
      return this.repo.searchByMonth(searchKey)
    }
    if (searchBy == "year") {
      return this.repo.searchByYear(searchKey)
    }
    if (searchBy == "author") {
      return this.repo.searchByAuthor(searchKey)
    }
    if (searchBy == "supervisor") {
      return this.repo.searchBySupervisor(searchKey)
    }
    if (searchBy == "createdBy") {
      return this.repo.searchByCreatedBy(searchKey)
    }
  }
}

export = filter