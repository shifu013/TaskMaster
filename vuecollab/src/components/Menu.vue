<template lang="">
  <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
          <div class="app-brand demo">
            <a href="index.html" class="app-brand-link">
              <span class="app-brand-logo demo">
              </span>
              <span class="app-brand-text demo menu-text fw-bolder ms-2">TASKMASTER</span>
            </a>

            <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
              <i class="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
          </div>

          <div class="menu-inner-shadow"></div>

          <ul class="menu-inner py-1">
            <!-- Dashboard -->
            <li class="menu-item" :class="{ active: activeItem === 'home' }" @click="setActive('home')">
        <router-link :to="{ name: 'home' }" class="menu-link">
          <i class="menu-icon tf-icons bx bx-home-circle"></i>
          <div data-i18n="Dashboards">Home</div>
        </router-link>
            </li>
            
            <li class="menu-header small text-uppercase">
              <span class="menu-header-text">Pages</span>
            </li>
            <li class="menu-item" :class="{ active: activeItem === 'manage' }" @click="setActive('manage')">
                  <router-link :to="{ name: 'manage' }" class="menu-link" >
                    <i class="menu-icon tf-icons bx bx-lock-open-alt"></i>
                  <div data-i18n="Basic">Login</div>
                </router-link>
            </li>

           
          </ul>
        </aside>
</template>
<script>
export default {
name: "Menu",
data() {
  return {
    activeItem: null,
  };
},
methods: {
  setActive(routeName) {
    this.activeItem = routeName;
  },
},
};
</script>

<style scoped>
@import '@/assets/assets/vendor/css/core.css';
@import '@/assets/assets/vendor/css/theme-default.css';
@import '@/assets/assets/css/demo.css';
@import '@/assets/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css';
@import '@/assets/assets/vendor/libs/apex-charts/apex-charts.css';
</style>
