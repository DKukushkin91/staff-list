import {Actions} from '@tsTypes/actions';
import {State} from '@tsTypes/state';
import {ActionType} from '@store/actions';
import {AuthorizationStatus} from '@app/constants';
import {adaptationStaff} from '@services/adapter';

const initialState = {
    staff: [],
    authorizationStatus: AuthorizationStatus.UNKNOWN,
    isDataLoaded: false,
    staffDetails: null,
    searchQuery: '',
    isShowAddStaffModal: false,
    isShowSuccessModal: false,
    isShowConfirmDeleteModal: false,
    idCurrentStaffItem: '',
}

const reducer = (state: State = initialState, action: Actions): State => {
    switch (action.type) {
        case ActionType.LOAD_STAFF_LIST:
            return {
                ...state,
                staff: action.payload,
                isDataLoaded: true
            }
        case ActionType.ADD_STAFF_ITEM:
            return {
                ...state,
                staff: [...state.staff, adaptationStaff(action.payload)],
            }
        case ActionType.EDIT_STAFF_ITEM:
            return {
                ...state,
                staff: state.staff.map(el => el.id === action.payload.id ? adaptationStaff(action.payload) : el),
            }
        case ActionType.DELETE_STAFF_ITEM:
            return {
                ...state,
                staff: state.staff.filter(el => el.id !== action.payload),
            }
        case ActionType.LOAD_STAFF_DETAILS:
            return {
                ...state,
                staffDetails: action.payload
            }
        case ActionType.REMOVE_STAFF_DETAILS:
            return {
                ...state,
                staffDetails: action.payload
            }
        case ActionType.SEARCH_STAFF:
            return {
                ...state,
                searchQuery: action.payload,
            }
        case ActionType.REQUIRE_AUTHORIZATION:
            return {
                ...state,
                authorizationStatus: action.payload,
            }
        case ActionType.SHOW_ADD_STAFF_MODAL:
            return {
                ...state,
                isShowAddStaffModal: action.payload,
            }
        case ActionType.SHOW_SUCCESS_MODAL:
            return {
                ...state,
                isShowSuccessModal: action.payload,
            }
        case ActionType.SHOW_CONFIRM_DELETE_MODAL:
            return {
                ...state,
                isShowConfirmDeleteModal: action.payload,
            }
        case ActionType.ID_CURRENT_STAFF_ITEM:
            return {
                ...state,
                idCurrentStaffItem: action.payload,
            }

        default:
            return state
    }
}

export {reducer};