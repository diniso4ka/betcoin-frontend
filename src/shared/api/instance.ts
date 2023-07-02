import axios, { CreateAxiosDefaults } from 'axios';

const api = axios.create({
    baseURL: __API__,
} as CreateAxiosDefaults);

export { api };
