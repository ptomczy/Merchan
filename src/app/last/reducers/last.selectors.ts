import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILastState, IState } from '../models/last.model';

export const getFeatureState = createFeatureSelector<ILastState>('lastRedcr');

export const getValues = createSelector(getFeatureState, (state: ILastState)=> state.myLastState.value);
