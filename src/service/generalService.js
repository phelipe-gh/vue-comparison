import axios from 'axios';

export default {

  async getSegments(params) {

    return axios.get('http://localhost:3000/segments', params).then((response) => response.data);

  },

  async getMainActivity(params) {

    return axios.get('http://localhost:3000/main-activity', params).then((response) => response.data);

  },

};
