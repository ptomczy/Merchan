import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState } from '../models/last.model';
import { getValue } from './last.reducer';

export const getFeatureState = createFeatureSelector<IState>('lastRedcr');

export const getValueSelector = createSelector(getFeatureState, getValue);
