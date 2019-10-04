
import { on, createReducer, Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { IPerson, IRoom, IMeeting } from '../models/suppliers.model';
import * as SupplierActions from '../actions/suppliers.actions';



export interface IState extends  EntityState<IMeeting> {}

export const adapter: EntityAdapter<IMeeting> = createEntityAdapter<IMeeting>({
    selectId: x => x.id,
});

export const initialState: IState = adapter.getInitialState({

});


const supplierReducer = createReducer(
    initialState, 
    on(SupplierActions.START_EXPEDITION_SUCCESS, (state, { mtng }) => {
        return adapter.addOne(mtng, state);
    }),
    on(SupplierActions.END_EXPEDITION_SUCCESS, (state, { mtng }) => {
        return adapter.removeOne(mtng.id, state);
    })
)

export function reducer(state: IState | undefined, action: Action) {
    return supplierReducer(state, action);
  };

export const getMeetingState = createFeatureSelector<IState>('mtng');

const {selectIds, selectEntities, selectAll, selectTotal} = adapter.getSelectors();

export const getMeetingIds = createSelector(getMeetingState,selectIds);
export const getMeetingEntities = createSelector(getMeetingState, selectEntities);
export const getMeetingAll = createSelector(getMeetingState, selectAll);
export const getMeetingTotal = createSelector(getMeetingState, selectTotal);


