// constants.ts
// export const BASE_URL = 'http://192.168.1.245:8000/api/v1/';
// export const REPORT_URL = 'http://192.168.1.245:8000/reports/pynumero/';
export const SAMPLE_REPORT_URL = 'https://numerology.testsite4me.com/reports/pynumero/sample-report/';
// export const BASE_URL = 'https://www.shakuntalarani.com/api/v1/'
export const BASE_URL = 'https://numerology.testsite4me.com/api/v1/'
export const REPORT_URL = 'https://numerology.testsite4me.com/reports/pynumero/';

export const apiEndpoints = {
    LOGIN: 'login',
    REGISTER: 'register',
    LOGOUT: 'logout',
    ADD_CLIENT: 'createuserclients',
    UPDATE_CLIENT: 'updateuserclients',
    GET_CLIENT: 'getuserclients',
    DELETE_CLIENT: 'deleteuserclients',
    CHECK_SUBSCRIPTION: 'checksubscriptionstatus',
    UPDATE_PROFILE: 'updateprofile',
    CHANGE_PASSWORD: 'changepassword',
    CHECK_APP_VERSION: 'checkappversion',
    RESET_PASSWORD: 'resetpassword',
    VERIFY_OTP: 'verifyotp',
    RESEND_OTP: 'resendotp',
    GENERATE_REPORT: 'generatereport'
};

export const imagePaths = {
    BACKGROUND_IMAGE: require('../Assets/Images/bg.jpg'),
    LOGO: require('../Assets/Images/logo.png'),
    CENTER_LOGO: require('../Assets/Images/new-logo-1.png'),
    HIDE_PASS: require('../Assets/Images/eyeClose.png'),
    SHOW_PASS: require('../Assets/Images/eyeOpen.png'),
    NO_INTERNET: require('../Assets/Images/noInternet.png'),
};

export const screenNames = {
    LOGIN: "Login",
    REGISTER: "Register",
    HOME: "Home",
    SIDEBAR_ROUTES: "SideBarRoutes",
    MY_CLIENTS: "My Clients",
    MY_PROFILE: "My Profile",
    APP_FEEDBACK: "App Feedback",
    APP_RATING: "App Rating",
    ABOUT_APP: "About App",
    TERMS_OF_USAGE: "Terms Of Usage",
    PRIVACY_POLICY: "Privacy Policy",
    ADD_CLIENT: "Add Client",
    NUMEROLOGY_DETAIL: "Numerology Details",
    DETAIL: "Details",
    INTENSITY: "Intensity",
    TEMPERAMENT: "Temperament",
    PYRAMID_RESULT: "Pyramid Result",
    ANNUAL_TABLE: "Personal Year",
    PERSONAL_MONTH: "Personal Month",
    PERSONAL_DAY: "Personal Day",
    CHANGE_PASSWORD: "Change Password",
    FORGOT_PASSWORD: "Forgot Password",
    GET_REPORT_SCREEN: "Get Report"
    
};
