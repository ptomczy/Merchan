import { createAction, props } from '@ngrx/store';
import { ISkill, IRoom, IPerson, IMeeting } from '../models/suppliers.model';

export const SET_SUPPLIER = createAction('[Suppliers] Supplier set', props<{person: IPerson}>());
export const SET_SUPPLIER_SUCCESS = createAction('[Suppliers] Supplier set successfully', props<{person: IPerson}>());
export const SET_SUPPLIER_FAILED = createAction('[Suppliers] Failed to set the supplier', props<{error: any}>());

export const SET_ROOM = createAction('[Suppliers] Room set', props<{room: IRoom}>());
export const SET_ROOM_SUCCESS = createAction('[Suppliers] Room set successfully', props<{room: IRoom}>());
export const SET_ROOM_FAILED = createAction('[Suppliers] Failed to set the room', props<{error: any}>());

export const SET_SKILL = createAction('[Suppliers] Skill set', props<{skill: ISkill}>());
export const SET_SKILL_SUCCESS = createAction('[Suppliers] Skill set successfully', props<{skill: ISkill}>());
export const SET_SKILL_FAILED = createAction('[Suppliers] Failed to set the skill', props<{error: any}>());

export const START_EXPEDITION = createAction('[Suppliers] Action started');
export const START_EXPEDITION_SUCCESS = createAction('[Suppliers] Action started successfully', props<{mtng: IMeeting}>());
export const START_EXPEDITION_FAILED = createAction('[Suppliers] Failed to start action', props<{error: any}>());

export const END_EXPEDITION = createAction('[Suppliers] Action finised');
export const END_EXPEDITION_SUCCESS = createAction('[Suppliers] Action finished successfully', props<{mtng: IMeeting}>());
export const END_EXPEDITION_FAILED = createAction('[Suppliers] Failed to end action', props<{error: any}>());