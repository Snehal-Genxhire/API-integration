<template>
  <v-app>
    <v-layout>
      <!-- <SideNavigation /> -->
      <v-main >
        <component :is="$route.meta.layout || 'div'">
          <router-view />
        </component>
        
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import SideNavigation from "./components/SideNavigation.vue";
import TopBar from "./components/TopBar.vue";

export default {
  name: "App",
  data: () => ({
    //
  }),
  components: { TopBar, SideNavigation },
};
</script>
