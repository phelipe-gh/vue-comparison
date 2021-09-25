/* eslint-disable no-undef */
/* eslint-disable no-multiple-empty-lines */
import { shallowMount, mount } from '@vue/test-utils';
import axios from 'axios';
import MainPainel from '../../src/components/MainPainel.vue';

describe('MainPainel', () => {

  const wrapper = shallowMount(MainPainel);

  it('Testing information about last update', async () => {

    expect(wrapper.find('#reference').text()).not.toBeNull();

  });

  it('Testing initial components', async () => {

    const response = await axios.get('http://localhost:3000/segments');
    data = response.data;
    expect(response.status).toBe(200);

  });


  it("Testing displays 'Faturamento!' when custom event is emitted", () => {

    const wrapper = mount(MainPainel);
    expect(wrapper.html()).toContain('Faturamento');

  });


});


