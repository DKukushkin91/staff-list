import {StaffData, StaffDataList} from '@tsTypes/staff-data';
import {AuthorizationStatus} from '@app/constants';

export type State = {
    staff: StaffDataList,
    authorizationStatus: AuthorizationStatus,
    isDataLoaded: boolean,
    staffDetails: null | StaffData,
    searchQuery: string,
    isShowAddStaffModal: boolean,
    isShowSuccessModal: boolean,
    isShowConfirmDeleteModal: boolean,
    idCurrentStaffItem: string | number,
}