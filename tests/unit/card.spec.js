/* eslint-disable no-undef */
/* eslint-disable no-multiple-empty-lines */
import { shallowMount } from '@vue/test-utils';
import MainPainel from '../../src/components/MainPainel.vue';
describe('Card', () => {

  it('Testing card component', async () => {

    const wrapper = shallowMount(MainPainel);
    expect(wrapper.find('#main-card')).not.toBeNull();

  });

});


