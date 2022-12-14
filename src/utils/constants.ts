export const apiRoutes = {
  BASE_URL: 'http://115.112.43.74:8585',

  // User
  LOGIN: '/cpaas/token',
  MOCKLOGIN: '/auth/login',
  SET_PASSWORD: '/api/v1/auth/password',
  FORGOT_PASSWORD: '/cpaas/forgotPassword',
  RESET_PASSWORD: '/cpaas/resetPassword',
  GET_USER_INFO: '/cpaas/userinfo',
  LOGOUT: '/cpaas/logout',

  // Billing
  GET_INVOICES: '/orchestration/billing/invoices/getInvoices',
  VIEW_INVOICES: '/result_data/Download_Billing_Invoice',
  DOWNLOAD_INVOICES: '/orchestration/billing/invoices/downloadBillingInvoice',
  DOWNLOAD_INVOICES_CDR: '/orchestration/billing/invoices/downloadBillingInvoiceCDR',
}

export const apiHelpers = {
  HEADER_AUTHORIZATION: 'Authorization',
  HEADER_CONTENT_TYPE: 'Content-Type',
  TOKEN_TYPE: 'Bearer',
  CONTENT_TYPE_APP_JSON: 'application/json',
}

export const appThemes = {
  LIGHT_THEME: 'light',
  DARK_THEME: 'dark',
}

export const localStorageVar = {
  THEME_VAR: 'theme',
  TOKEN_VAR: 'token',
  USER_VAR: 'user',
  I18_LANG_VAR: 'i18nextLng',
  LANG_VAR: 'lng',
}

export const thunkPaths = {
  LOGIN_THUNK: 'auth/login',
  LOGOUT_THUNK: 'auth/logout',
  UPDATEPASSWORD_THUNK: 'auth/updatePassword',
}

export const slices = {
  AUTH_SLICE: 'auth',
  BILLING_SLICE: 'billing',
}

export const billingKeys = {
  INVOICE_NUMBER: 'invoiceNumber',
  CUSTOMER_LE: 'customerLe',
  TATA_ENTITY: 'tataEntity',
  PO_NUMBER: 'poNumber',
  PAYMENT_STATUS: 'paymentStatus',
  INVOICE_AMOUNT: 'invoiceAmount',
  CURRENCY: 'currency',
  INVOICE_DATE: 'invoiceDate',
  DUE_DATE: 'dueDate',
  PAYMENT_DATE_TIME: 'paymentDateTime',
  TIME_ZONE: 'timeZone',
}

export const typeVar = {
  IMAGE_WEBP: 'image/webp',
  IMAGE_PNG: 'image/png',
  IMAGE_SVG: 'image/svg+xml',
  IMAGE_JPG: 'image/jpg',
  TEXT: 'text/plain',
  HTML: 'text/html',
  PDF: 'application/pdf',
  JSON: 'application/json',
  MP4: 'audio/mp4',
  OGG: 'audion/ogg',
  OTF: 'font/opentype',
  WEBM: 'video/webm',
}

export const appRoutes = {
  DEFAULT_PARMS: '?page=1&take=10',
  ROOT: '/',
  LOGIN: '/login',
  CHECK_PROTECTED: '/checkprotected',
  SET_PASSWORD: '/setpassword',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/password/reset/:token',
  NOT_FOUND: '*',
  BILLING: '/invoices',
  INVOICE: '/invoices/:id',
  RAISE_TICKET: '/invoices/raiseticket',
  INVOICE_BILL: '/invoices/invoicebill',
  BILLING_DETAILS: '/invoices/billingdetails'
}

export const breadCrums = {
  BILLING: {
    path: [
      { transName: 'dashboard', type: 'link', linkURL: appRoutes.BILLING },
      { transName: 'billingInvoiceshead', type: 'text', linkURL: '' },
    ],
    PageName: 'billingInvoiceshead',
  },
}

export const dataTables = {
  BILLING: (values: [], masterData = []) => ({
    data: values,
    columns: [
      { eleName: apiVrbls.BILLING.INVOICE_ID, headTrans: 'id', sort: true, filter: false },
      {
        eleName: apiVrbls.BILLING.CUSTOMER_LE,
        headTrans: 'customerLe',
        sort: true,
        filter: true,
        filterData: {
          element: "customerLe",
          values: masterData.map((e: any) => e[apiVrbls.BILLING.CUSTOMER_LE]).filter((it, i, ar) => ar.indexOf(it) === i)
        }
      },
      {
        eleName: apiVrbls.BILLING.TATA_ENTITY,
        headTrans: 'entity',
        sort: true,
        filter: false,
      },
      {
        eleName: apiVrbls.BILLING.PO_NUMBER,
        headTrans: 'poNo',
        sort: true,
        filter: true,
        filterData: {
          element: "poNumber",
          values: masterData.map((e: any) => e[apiVrbls.BILLING.PO_NUMBER]).filter((it, i, ar) => ar.indexOf(it) === i)
        }
      },
      {
        eleName: apiVrbls.BILLING.PAY_STATUS,
        headTrans: 'status',
        sort: true,
        filter: true,
        filterData: {
          element: "paymentStatus",
          values: masterData.map((e: any) => e[apiVrbls.BILLING.PAY_STATUS]).filter((it, i, ar) => ar.indexOf(it) === i)
        }
      },
      {
        eleName: apiVrbls.BILLING.INVOICE_AMT,
        headTrans: 'invoiceAmount',
        sort: true,
        filter: true,
        filterData: {
          element: "currency",
          values: masterData.map((e: any) => e[apiVrbls.BILLING.INVOICE_AMT]).filter((it, i, ar) => ar.indexOf(it) === i)
        }
      },
      {
        eleName: apiVrbls.BILLING.INVOICE_DATE,
        headTrans: 'invoiceIssuedDate',
        sort: true,
        filter: false,
      },
      { eleName: 'Due_date', headTrans: 'dueDate', sort: true, filter: false },
    ],
    tableName: 'billing',
  }),
}

export const apiDefaultrespons = {
  LOGIN_ERRRO: {
    "meta_data": {
      "api_name": "token"
    },
    "data": {
      "data": null,
      "message": "Internal Error",
      "status": 404
    }
  }
}


export const staticErrors = {
  serverInactive: "Opps! Something went wrong"
}


export const apiVrbls = {
  USER: {
    ACCESS_TOKEN: "access_token",
    IS_LOGGED_IN_FIRST: "isLoginFirstTime",
    EMAIL_ID: "emailId"
  },

  BILLING: {
    CURENCY: "Currency",
    INVOICE_AMT: "Invoice_amt",
    INVOICE_ID: "Invoice_no",
    CUSTOMER_LE: "Customer_LE",
    TATA_ENTITY: "Tata_Entity",
    PO_NUMBER: "PO_number",
    PAY_STATUS: "Payment_Status",
    INVOICE_DATE: "Invoice_date"
  }
}