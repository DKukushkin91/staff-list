export type StaffData = {
    id: string;
    avatar: string;
    fullName: string;
    position: string;
    department: string;
    phoneNumber: number | string;
    email: string;
    birthday: string;
    description: string;
    socialLink: string;
};

export type StaffDataList = StaffData[];