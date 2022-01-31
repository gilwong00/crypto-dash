import axios from 'axios';
import { AuthUser } from '../@types';

const BASE_URL = 'http://localhost:5000/api/v1/users';

export const login = async (payload: AuthUser) => {
  return await axios.post(`${BASE_URL}/login`, payload);
};
