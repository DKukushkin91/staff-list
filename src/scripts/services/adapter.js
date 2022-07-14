export const adaptationStaff = (staff) => ({
    id: staff['id'],
    avatar: staff['avatar'],
    fullName: staff['full_name'],
    position: staff['position'],
    department: staff['department'],
    phoneNumber: staff['phone_number'],
    email: staff['email'],
    birthday: staff['birthday'],
    description: staff['description'],
    socialLink: staff['social_link']
})

export const adaptationStaffList = (staffList) => staffList.map((staff) => adaptationStaff(staff));

export const adaptationNewStaff = (staff) => ({
    id: staff['id'],
    avatar: staff['avatar'],
    full_name: staff['fullName'],
    position: staff['position'],
    department: staff['department'],
    phone_number: staff['phoneNumber'],
    email: staff['email'],
    birthday: staff['birthday'],
    description: staff['description'],
    social_link: staff['socialLink']
})