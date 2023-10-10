<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),

  mounted() {
    this.loadScripts();
  },
  methods: {
    loadScripts() {
      const scriptUrls = [
      '/js/helpers.js',
        '/js/config.js',
        '/libs/jquery/jquery.js',
        '/js/menu.js',
        '/libs/perfect-scrollbar/perfect-scrollbar.js',
        '/js/bootstrap.js',
        '/libs/popper/popper.js',
        '/js/main.js',

        
      ];

      const head = document.getElementsByTagName('head')[0];

      scriptUrls.forEach((scriptUrl) => {
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.async = true;
        head.appendChild(script);
      });
    },
  },
}
</script>

