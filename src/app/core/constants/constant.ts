const apiUrl = 'http://localhost:8080/api/v1';

export const APIEndPoint={
    AUTH:{
        Register:`${apiUrl}/users/register`,
        Login:`${apiUrl}/users/login`,
        GetCurrentUser:`${apiUrl}/users/current-user`,
        UpdateAccount:`${apiUrl}/users/update-account`,
        ChangePassword:`${apiUrl}/users/change-password`,
        ResetPassword:`${apiUrl}/users/reset-password`,
        RefreshToken:`${apiUrl}/users/refresh-token`,
        Logout:`${apiUrl}/users/logout`,
    },
};

export const LocalStorage = {
    accessToken:'accessToken'
};