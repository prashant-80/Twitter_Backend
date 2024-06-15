

class crudRepository {
    constructor(model) {
      this.model = model;
    }


    async  create(data){
        try{
            const response = this.model.create(data)
            return response;
        }catch(error){
            console.log(error);
            throw(error);
        }
    }


}

module.exports = crudRepository;