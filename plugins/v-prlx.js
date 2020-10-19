import Vue from 'vue'
import VuePrlx, { VuePrlxDirective } from 'vue-prlx'

// As a plugin
Vue.use(VuePrlx)

// Or as a directive
Vue.directive('prlx', VuePrlxDirective)
