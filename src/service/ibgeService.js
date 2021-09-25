import axios from 'axios';

export default {

  async getIBGEIndicators() {

    return axios.get('https://servicodados.ibge.gov.br/api/v3/agregados/portal?view=object').then((response) => response.data);

  },

};
