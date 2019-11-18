import { Action } from '@ngrx/store';



export const ADD_OBJ = 'ADDOBJ';
export const CHANGE_OBJ = 'CHANGEOBJ';
export const DELETE_OBJ = 'DELETEOBJ';

export class AddObj implements Action{
    readonly type = ADD_OBJ;
    constructor(public payload: {id: number; value: string}){}
}

export class ChangeObj implements Action{
    readonly type = CHANGE_OBJ;
    constructor(public payload: {id: number; newValue}){}
}

export class DeleteObj implements Action{
    readonly type = DELETE_OBJ;
    constructor(public payload: {id: number}){}
}

export type LastActions = AddObj | ChangeObj | DeleteObj;



