/* eslint-disable import/no-named-as-default-member */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale';
import lang from 'element-ui/lib/locale/lang/pt-br';
import axios from 'axios';

import * as sankhyaForms from '@sankhyalabs/ezui';

import {
  BootstrapVue,
  IconsPlugin,
  BootstrapVueIcons,
  CollapsePlugin,
  NavbarPlugin,
  NavPlugin,
  SidebarPlugin,
  BSidebar,
  BFormGroup,
  BCard,
  BCardText,
  BButton,
  BTable,
  BSpinner,
  BFormSelect,
  FormSelectPlugin,
} from 'bootstrap-vue';
import App from './App.vue';

import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import './assets/css/global.scss';

import router from './router';

window.customElements.define('ez-date-input', sankhyaForms.EzDateInput);
window.customElements.define('ez-icon', sankhyaForms.EzIcon);
window.customElements.define('ez-number-input', sankhyaForms.EzNumberInput);
window.customElements.define('ez-collapsable-box', sankhyaForms.EzCollapsableBox);
window.customElements.define('ez-text-input', sankhyaForms.EzTextInput);
window.customElements.define('ez-combo-box', sankhyaForms.EzComboBox);
window.customElements.define('ez-search', sankhyaForms.EzSearch);
window.customElements.define('ez-popover', sankhyaForms.EzPopover);
window.customElements.define('ez-text-area', sankhyaForms.EzTextArea);
window.customElements.define('ez-label-chip', sankhyaForms.EzLabelChip);
window.customElements.define('ez-time-input', sankhyaForms.EzTimeInput);
window.customElements.define('ez-button', sankhyaForms.EzButton);
window.customElements.define('ez-action-chip', sankhyaForms.EzActionChip);
window.customElements.define('ez-check', sankhyaForms.EzCheck);
window.customElements.define('ez-tab-selector', sankhyaForms.EzTabselector);
window.customElements.define('ez-calendar', sankhyaForms.EzCalendar);
window.customElements.define('ez-modal', sankhyaForms.EzModal);
window.customElements.define('ez-form', sankhyaForms.EzForm);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);
Vue.use(CollapsePlugin);
Vue.use(NavbarPlugin);
Vue.use(NavPlugin);
Vue.use(SidebarPlugin);
Vue.use(FormSelectPlugin);

Vue.use('b-table', BTable);
Vue.use('b-card', BCard);
Vue.use('b-card-text', BCardText);
Vue.use('b-form-group', BFormGroup);

Vue.use(ElementUI);

Vue.component('b-form-select', BFormSelect);
Vue.component('b-button', BButton);
Vue.component('b-sidebar', BSidebar);
Vue.component('b-spinner', BSpinner);

locale.use(lang);

Vue.config.prototype = false;
Vue.http = Vue.prototype.$http = axios;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
