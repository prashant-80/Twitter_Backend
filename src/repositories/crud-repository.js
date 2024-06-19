
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

    async get(){
        try{
            const response  = this.model.find({});
            return response;
        }catch(error){
            console.log(error);
            throw(error);
        }
    }

    async get(id){
        try{
            const response  = this.model.findById(id);
            return response;
        }catch(error){
            console.log(error);
            throw(error);
        }
    }

    async delete(id){
        try{
            const response  = this.model.deleteOne({_id:id});
            return response;
        }catch(error){
            console.log(error);
            throw(error);
        }
    }
    

}

module.exports = crudRepository;