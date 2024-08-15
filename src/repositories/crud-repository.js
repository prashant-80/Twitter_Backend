
class crudRepository {
    constructor(model) {
      this.model = model;
    }


    async  create(data){
        try{
            const response = await this.model.create(data)
            return response;
        }catch(error){
            console.log(error);
            throw(error);
        }
    }

    async getAll(){
        try{
            const response  = await this.model.find({});
            return response;
        }catch(error){
            console.log(error);
            throw(error);
        }
    }

    async get(id) {
        try {
            const response = await this.model.findById(id);
            if (!response) {
                console.log(`No record found with ID: ${id}`);
                return null;
            }
            return response;
        } catch (error) {
            console.error(`Error fetching record with ID: ${id}`, error);
            throw error; 
        }
    }

    async delete(id){
        try{
            const response  = await this.model.deleteOne({_id:id});
            return response;
        }catch(error){
            console.log(error);
            throw(error);
        }
    }
    

}

module.exports = crudRepository;