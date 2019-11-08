import { Action } from '@ngrx/store';
import { Itodo } from '../models/todo.model';


export const ADD_T = 'ADD';
export const UPDATE_T = 'UPDATE_T';
export const DELETE_T = 'DELETE_T';
export const TOGGLE_T = 'TOGGLE_T';

export class AddTodo implements Action {
    readonly type = ADD_T;
    constructor(public payload: {todo: Itodo}){}
}

export class UpdateTodo implements Action {
    readonly type = UPDATE_T;
    constructor(public payload: {id: string, newValue: string}){}
}

export class DeleteTodo implements Action {
    readonly type = DELETE_T;
    constructor(public payload: {id: string}){}
}

export class ToggleTodo implements Action {
    readonly type = TOGGLE_T;
    constructor(public payload: {id: string, done: boolean}){}
}

export type TodoActions = AddTodo | UpdateTodo | DeleteTodo | ToggleTodo;

