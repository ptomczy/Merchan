import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private serviceData = [];

    constructor(){

    }

    setData(data){
        this.serviceData = data;
    }

    getData(id){
        return this.serviceData[id];
    }
}