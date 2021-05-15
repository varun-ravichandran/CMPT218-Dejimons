"use strict";
class DejimonServices {
    constructor() {
        const exisitingpigs = localStorage.getItem('Dejimons'); //exisiting dejimons in local storage
        this.pig = exisitingpigs ? JSON.parse(exisitingpigs) : [];
    }
    add(p) {
        p.id = DejimonServices.currentID; // assign unique id to new Dejimons
        DejimonServices.currentID++;
        this.pig.push(p);
        console.log(this.pig);
        this.updateLocalStorage(this.pig);
    }
    updateLocalStorage(p) {
        localStorage.setItem('Dejimons', JSON.stringify(p));
    }
    getDejimonById(id) {
        return this.pig.find(dejimon => dejimon.id == id); //To assign the id to the delete button and more info
    }
    removeDejimonById(id) {
        const updatedDegimons = this.pig.filter(dejimon => dejimon.id !== id); //deletes the dejimon 
        this.updateLocalStorage(updatedDegimons);
        this.reAssignId(id);
    }
    reAssignId(id) {
        this.pig.find(dejimon => dejimon.id == dejimon.id);
        this.pig.splice(id, 1);
        this.pig = this.pig.map((dejimon, id) => (Object.assign(Object.assign({}, dejimon), { id }))); //Reassign the value of the id when deleted
        this.updateLocalStorage(this.pig); //push the new id
    }
    getAll() {
        console.log(this.pig);
        return this.pig;
    }
}
DejimonServices.currentID = JSON.parse(localStorage.getItem("Dejimons") || '{}').length || 0; //assign unique id even when refreshed the page
