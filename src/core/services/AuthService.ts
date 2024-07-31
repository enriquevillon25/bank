import axios from 'axios';
const api = 'http://localhost:3000/api';

interface LoginResponse {
  token: string;
  message: string;
}
interface LoginRequest {
  username: string;
  password: string;
}

export class AuthService {
  constructor() {}
  async login({username, password}: LoginRequest) {
    try {
      const response = await axios.post<LoginResponse>(`${api}/login`, {
        username: username,
        password: password,
      });
      return response.data;
    } catch (e) {
      throw e;
    }
  }
  register() {}
}
