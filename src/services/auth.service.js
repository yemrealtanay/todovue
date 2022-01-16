import axios from 'axios';

const API_URL = 'http://todoapi.test/api/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify((response.data)));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'register', {
      name: user.name,
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation
    });
  }
}

  export default new AuthService();
