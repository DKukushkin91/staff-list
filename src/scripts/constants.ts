export enum AppRoute {
    LOGIN = '/login',
    ROOT = '/',
    STAFF_DETAILS = 'staff-list/:id',
    ADMIN = 'admin',
    ERROR = '*',
}

export enum AuthorizationStatus {
    AUTH = 'AUTH',
    NO_AUTH = 'NO_AUTH',
    UNKNOWN = 'UNKNOWN',
}

export enum APIRoute {
    STAFF_LIST = 'staff-list',
    LOGIN = 'login',
}