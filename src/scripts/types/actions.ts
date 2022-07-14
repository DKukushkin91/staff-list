import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '@tsTypes/state';
import {
    loadStaffDetails,
    loadStaffList,
    removeStaffDetails,
    requireAuthorization,
    redirectToRoute,
    searchStaff,
    addStaff,
    editStaff,
    deleteStaff,
    idCurrentStaffItem,
    isShowAddStaffModal, 
    isShowSuccessModal,
    isShowConfirmDeleteModal,
} from '@store/actions';

export type Actions =
    | ReturnType<typeof loadStaffList>
    | ReturnType<typeof loadStaffDetails>
    | ReturnType<typeof removeStaffDetails>
    | ReturnType<typeof requireAuthorization>
    | ReturnType<typeof redirectToRoute>
    | ReturnType<typeof searchStaff>
    | ReturnType<typeof addStaff>
    | ReturnType<typeof isShowAddStaffModal>
    | ReturnType<typeof editStaff>
    | ReturnType<typeof isShowSuccessModal>
    | ReturnType<typeof deleteStaff>
    | ReturnType<typeof isShowConfirmDeleteModal>
    | ReturnType<typeof idCurrentStaffItem>

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>