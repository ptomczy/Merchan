import { createReducer, on, Action } from '@ngrx/store';
import { ACTIONTYPES } from '../actions/sf.actions';
import { IUser, IServiceEvent } from '../models/sf.model';

export interface IState {
    user: IUser,
    serviceEvent: IServiceEvent
}

export const INITIALSTATE: IState = {user: null, serviceEvent: null};

const SFreducer = createReducer(INITIALSTATE, 
    on(ACTIONTYPES.SET_USER, ACTIONTYPES.SET_USER_FAILED, state => ({
        ...state
    })),
    on(ACTIONTYPES.SET_USER_SUCCESS, (state, {user}) => ({
        ...state,
        user: user
    })),
    );

export function reducer(state: IState | undefined, action: Action) {
    return SFreducer(state, action);
}