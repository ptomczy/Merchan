import * as todoActions from '../actions/todo.actions';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

export const initialState = [];

export function todoReducer(state = initialState, action: todoActions.TodoActions){
    switch(action.type) {
        case todoActions.ADD_T: {
            return [action.payload.todo, ...state];
        }
        case todoActions.UPDATE_T: {
            return state.map(itm => {
                return itm.id === action.payload.id
                ? Object.assign({}, itm, {value: action.payload.newValue})
                : itm;
            })
        }
        case todoActions.DELETE_T: {
            return state.filter(itm => {
                itm.id !== action.payload.id
            })
        }
        case todoActions.TOGGLE_T: {
            return state.map(itm => {
                itm.id === action.payload.id
                ? Object.assign({}, state, {done: action.payload.done})
                : itm;
            })
        }

        default: 
            return state;
    }
}