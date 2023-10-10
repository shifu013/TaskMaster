<template>
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <Menu/>
      <div class="layout-page">
        <Topbar/>
        <div class="content-wrapper">
        <Login/>
        </div>
      </div>
    </div>
  </div>
 
  
</template>

<script>
import { defineComponent } from 'vue';

import Topbar from '@/components/Topbar.vue';
import Menu from '@/components/Menu.vue';
import Login from '@/components/Login.vue';
export default defineComponent({
  name: 'Manage',

  components: {
    Topbar,
    Menu,
    Login,
  },
});
</script>
