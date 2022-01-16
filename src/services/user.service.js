import axios from 'axios';
import authHeader from "@/services/auth-header";

const API_URL = 'http://todoapi.test/api/auth/user-profile';

class UserService {

  getProfile() {
    return axios.get(API_URL, { headers: authHeader() });
  }
}

export default new UserService();
