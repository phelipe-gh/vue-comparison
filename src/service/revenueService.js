import axios from 'axios';

export default {

  async getPeriodComparison(idPartner, filter) {

    return axios.get(`http://localhost:3000/revenues/period-comparison/${idPartner}`, filter).then((response) => response.data);

  },

  async getMonthlyVariation(idPartner, filter) {

    return axios.get(`http://localhost:3000/revenues/monthly-comparison/${idPartner}`, filter).then((response) => response.data);

  },

  async getPartnerRevenues(idPartner, filter) {

    return axios.get(`http://localhost:3000/revenues/partner-revenues/${idPartner}`, filter).then((response) => response.data);

  },

};
