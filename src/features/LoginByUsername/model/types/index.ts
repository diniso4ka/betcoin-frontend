export interface ILoginByUsernameSchema {
    form: IForm;
    loading: boolean;
    error?: IError;
}

enum Fields {
    LOGIN = 'login',
    PASSWORD = 'password',
}

type IForm = Record<Fields, string>;

export interface ISetValuePayload {
    value: string;
    field: Fields;
}

interface IError {
    errorType: errorTypes;
    errorText: string;
}

export type errorTypes = 'BAD_REQUEST' | 'SERVER_ERROR';
