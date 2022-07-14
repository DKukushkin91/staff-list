import {StaffData, StaffDataList} from '@tsTypes/staff-data';
import {AuthorizationStatus} from '@app/constants';
import {createAction} from '@reduxjs/toolkit';

export enum ActionType {
    LOAD_STAFF_LIST = 'data/loadStaffList',
    LOAD_STAFF_DETAILS = 'data/loadStaffDetails',
    REMOVE_STAFF_DETAILS = 'data/removeStaffDetails',
    ADD_STAFF_ITEM = 'data/addStaffItem',
    EDIT_STAFF_ITEM = 'data/editStaffItem',
    DELETE_STAFF_ITEM = 'data/deleteStaffItem',
    REQUIRE_AUTHORIZATION = 'user/requireAuthorization',
    SEARCH_STAFF = 'user/searchStaff',
    REDIRECT_TO_ROUTE = 'route/redirectToRoute',
    SHOW_ADD_STAFF_MODAL = 'process/isShowAddStaffModal',
    SHOW_SUCCESS_MODAL = 'process/isShowSuccessModal',
    SHOW_CONFIRM_DELETE_MODAL = 'process/isShowConfirmDeleteModal',
    ID_CURRENT_STAFF_ITEM = 'process/idCurrentStaffItem',
}

export const loadStaffList = createAction(ActionType.LOAD_STAFF_LIST, (payload: StaffDataList) => ({payload}) as const);
export const loadStaffDetails = createAction(ActionType.LOAD_STAFF_DETAILS, (payload: StaffData) => ({payload} as const));
export const removeStaffDetails = createAction(ActionType.REMOVE_STAFF_DETAILS, (payload) => ({payload} as const));
export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (payload) => ({payload}) as const);
export const requireAuthorization = createAction(ActionType.REQUIRE_AUTHORIZATION, (payload: AuthorizationStatus) => ({payload}) as const);
export const searchStaff = createAction(ActionType.SEARCH_STAFF, (payload) => ({payload}) as const);
export const addStaff = createAction(ActionType.ADD_STAFF_ITEM, (payload) => ({payload}) as const);
export const isShowAddStaffModal = createAction(ActionType.SHOW_ADD_STAFF_MODAL, (payload) => ({payload}) as const);
export const editStaff = createAction(ActionType.EDIT_STAFF_ITEM, (payload) => ({payload}) as const);
export const isShowSuccessModal = createAction(ActionType.SHOW_SUCCESS_MODAL, (payload) => ({payload}) as const);
export const deleteStaff = createAction(ActionType.DELETE_STAFF_ITEM, (payload) => ({payload}) as const);
export const isShowConfirmDeleteModal = createAction(ActionType.SHOW_CONFIRM_DELETE_MODAL, (payload) => ({payload}) as const);
export const idCurrentStaffItem = createAction(ActionType.ID_CURRENT_STAFF_ITEM, (payload) => ({payload}) as const);