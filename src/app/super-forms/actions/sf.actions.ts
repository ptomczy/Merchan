import { createAction, props } from '@ngrx/store'
import { IUser } from '../models/sf.model';

export const SET_USER = createAction('[Super-forms] User prepared to create', props<{user: IUser}>());
export const SET_USER_SUCCESS = createAction('[Super-forms] User with success prepared to create', props<{user: IUser}>());
export const SET_USER_FAILED = createAction('[Super-forms] User failed to prepare to create', props<{error: any}>());

export const SET_FORM_DATA = createAction('[Super-forms] Data prepared to process');
export const SET_FORM_DATA_SUCCESS = createAction('[super-forms] Data prepared to process with success');
export const SET_FORM_DATA_FAILED = createAction('[Super-forms] Data failed to prepare to process');

export const LOAD_FORM_DATA = createAction('[Super-forms] Data prepared to load');
export const LOAD_FORM_DATA_SUCCESS = createAction('[Super-forms] Data prepared to load with success');
export const LOAD_FORM_DATA_FAILED = createAction('[Super-forms] Data failed to prepare to process');

export const ACTIONTYPES = {
    SET_USER,
    SET_USER_SUCCESS,
    SET_USER_FAILED,
    SET_FORM_DATA,
    SET_FORM_DATA_SUCCESS,
    SET_FORM_DATA_FAILED,
    LOAD_FORM_DATA,
    LOAD_FORM_DATA_SUCCESS,
    LOAD_FORM_DATA_FAILED
}