import {StaffData, StaffDataList} from '@tsTypes/staff-data';
import {APIRoute, AppRoute, AuthorizationStatus} from '@app/constants';
import {
    addStaff,
    deleteStaff,
    editStaff,
    loadStaffDetails,
    loadStaffList,
    redirectToRoute,
    requireAuthorization
} from '@store/actions';
import {ThunkActionResult} from '@tsTypes/actions';
import {AuthData} from '@tsTypes/auth-data';
import {saveToken, Token} from '@services/token';
import {adaptationNewStaff, adaptationStaff, adaptationStaffList} from '@services/adapter';

export const fetchStaffList = (): ThunkActionResult =>
    async (dispatch, _getState, api) => {
        const {data} = await api.get<StaffDataList>(APIRoute.STAFF_LIST);

        dispatch(loadStaffList(adaptationStaffList(data)))
    }

export const fetchStaffDetails = (id: string | number): ThunkActionResult =>
    async (dispatch, _getState, api) => {
        const {data} = await api.get<StaffDataList>(`${APIRoute.STAFF_LIST}/${id}`);

        dispatch(loadStaffDetails(adaptationStaff(data)))
    }

export const addStaffItem = (item: StaffData): ThunkActionResult =>
    async (dispatch, _getState, api) => {
        const {data} = await api.post<StaffData>(`${APIRoute.STAFF_LIST}`, adaptationNewStaff(item))

        dispatch(addStaff(data));
    }

export const editStaffItem = (item: StaffData, id: number | string): ThunkActionResult =>
    async (dispatch, _getState, api) => {
        const {data} = await api.patch<StaffData>(`${APIRoute.STAFF_LIST}/${id}`, adaptationNewStaff(item))

        dispatch(editStaff(data));
    }

export const deleteStaffItem = (id: number | string): ThunkActionResult =>
    async (dispatch, _getState, api) => {
        await api.delete<StaffData>(`${APIRoute.STAFF_LIST}/${id}`)

        dispatch(deleteStaff(id));
    }

export const checkAuthAction = (): ThunkActionResult =>
    async (dispatch, _getState, api) => {
        try {
            const {data} = await api.get(APIRoute.LOGIN);
            const isDataValuesEmpty = Object.values(data).every(el => el === null || el === '');

            if (isDataValuesEmpty) {
                throw new SyntaxError();
            }

            dispatch(requireAuthorization(AuthorizationStatus.AUTH));
        } catch (error) {
            dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
        }
    }

export const loginAction = ({email, password}: AuthData): ThunkActionResult =>
    async (dispatch, _getState, api) => {
        try {
            const {data: {token}} = await api.post<{ token: Token }>(APIRoute.LOGIN, {email, password})

            saveToken(token);

            dispatch(requireAuthorization(AuthorizationStatus.AUTH));
            dispatch(redirectToRoute(AppRoute.ADMIN));
        } catch (error) {
            dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
        }
    }
