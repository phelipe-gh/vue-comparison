/* eslint-disable no-undef */
/* eslint-disable no-multiple-empty-lines */
import axios from 'axios';

describe('Indicators', () => {

  const semester = new Date().getMonth > 6 ? new Date().getFullYear() + '01' : new Date().getFullYear() + '02';
  let data = null;

  it('Testing IBGE service availability', async () => {

    const response = await axios.get('https://servicodados.ibge.gov.br/api/v3/agregados/portal?view=object');
    data = response.data;
    expect(response.status).toBe(200);

  });

  test('IBGE api call for indices', () => {

    expect(data['4094'].resultados[0].series[0].serie[semester]).not.toBeNull();
    expect(data['5932'].resultados[0].series[0].serie[semester]).not.toBeNull();
    expect(data['7060'].resultados[0].series[0].serie[semester]).not.toBeNull();
    expect(data['1736'].resultados[0].series[0].serie[semester]).not.toBeNull();

  });

});


