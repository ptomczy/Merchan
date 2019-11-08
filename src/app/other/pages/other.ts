import { Component, OnInit } from "@angular/core";
import { Store } from '@ngrx/store';
import { Itodo } from '../models/todo.model';

import * as todoActions from '../actions/todo.actions';

@Component({
    selector: 'other-page',
    templateUrl: 'other.html'
})
export class OtherPage implements OnInit {
    todos$: any;
    todo: string;
    editing = false;
    idToEdit: string | null;
    genId: number = 1;

    constructor(private store: Store<any>){
        
    }

    generateId() {
        return this.genId++;
    }
    
    ngOnInit(){
        this.todos$ = this.store.select('todoReducer');
    }

    addTodo(value) {
        const todo: Itodo = {
            value, 
            done: false,
            id: this.generateId()
        }
        this.store.dispatch(new todoActions.AddTodo({todo}));
        this.todo = '';
    }

    deleteTodo(id){
        this.store.dispatch(new todoActions.DeleteTodo({id}))
    }

    editTodo(todo){
        this.editing = true;
        this.todo = todo.value;
        this.idToEdit = todo.id;
    }

    cancelEdit(){
        this.editing = false;
        this.todo = '';
        this.idToEdit = null;
    }

    updateTodo(updatedTodo){
        this.store.dispatch(new todoActions.UpdateTodo({id: this.idToEdit, newValue: updatedTodo}));
        this.todo = '';
        this.idToEdit = null;
        this.editing = false;
    }

    toggleDone(todo){
        this.store.dispatch(new todoActions.ToggleTodo({id: todo.id, done: !todo.done}));
    }


}