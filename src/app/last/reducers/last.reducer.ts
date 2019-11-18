import * as lastActions from '../actions/last.actions';
import { IState } from '../models/last.model';

export const initialState: Array<IState> = [];

export function lastReducer(state = initialState, action: lastActions.LastActions){
    switch(action.type){
        case 'ADDOBJ':
            return [...state, {id: action.payload.id, value: action.payload.value}]
    }
}