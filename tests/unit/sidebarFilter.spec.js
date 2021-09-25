/* eslint-disable no-undef */
/* eslint-disable no-multiple-empty-lines */
import { shallowMount } from '@vue/test-utils';
import SidebarFilter from '../../src/components/SidebarFilter.vue';

describe('MainPainel', () => {

  const wrapper = shallowMount(SidebarFilter);

  it('Testing main activity', async () => {

    expect(wrapper.find('#main-activity').text()).not.toBeNull();

  });

  it('Testing if segments it is selected by default', async () => {

    expect(wrapper.find('#main-activity').text()).not.toBeNull();

  });

});


