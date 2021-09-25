import axios from 'axios';
import mock from '../../data-mock';
export default {

  async getRevenuesDashboard() {

    return mock;

  },

  async getRateLevel(idPartner, filter) {

    return axios.get(`http://localhost:3000/default-rate/rate-level/${idPartner}`, filter).then((response) => response.data);

  },

};
