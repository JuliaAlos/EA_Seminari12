import http from '../http-common';
import IUser from '../types/User';

const getAll = () => http.get<Array<IUser>>('/');

const get = (name: any) => http.get<IUser>(`/${name}`);

const create = (data: IUser) => http.post<IUser>('/', data);

const update = (name: any, data: IUser) => http.put<any>(`/${name}`, data);

const remove = (name: any) => http.delete<any>(`/${name}`);

const UserService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default UserService;
