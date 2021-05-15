interface Services {
    add(p: Dejimon): void;
    getAll(): Dejimon[];
}

class DejimonServices implements Services {
    pig: Dejimon[];


    static currentID = JSON.parse(localStorage.getItem("Dejimons") || '{}').length || 0;    //assign unique id even when refreshed the page

    constructor() {
        const exisitingpigs = localStorage.getItem('Dejimons');     //exisiting dejimons in local storage
        this.pig = exisitingpigs ? JSON.parse(exisitingpigs) : [];
    }

    add(p: Dejimon) {

        p.id = DejimonServices.currentID; // assign unique id to new Dejimons
        DejimonServices.currentID++;

        this.pig.push(p);
        console.log(this.pig);
        this.updateLocalStorage(this.pig);
    }

    updateLocalStorage(p: Dejimon[]) {
        localStorage.setItem('Dejimons', JSON.stringify(p));       
    }

    getDejimonById(id: number) {
        return this.pig.find(dejimon => dejimon.id == id);  //To assign the id to the delete button and more info
    }

    removeDejimonById(id: number) {
        const updatedDegimons = this.pig.filter(dejimon => dejimon.id !== id);      //deletes the dejimon 
        this.updateLocalStorage(updatedDegimons);    
        this.reAssignId(id);
        
    }

    reAssignId(id: number){
        this.pig.find(dejimon => dejimon.id == dejimon.id);    
        this.pig.splice(id, 1);
        this.pig = this.pig.map((dejimon, id) => ({ ...dejimon, id }));     //Reassign the value of the id when deleted

         
        this.updateLocalStorage(this.pig);     //push the new id
    }

    getAll() {
        console.log(this.pig);
        return this.pig;
    }
}
