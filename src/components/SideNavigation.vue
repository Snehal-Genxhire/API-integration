<template>
    <div>
        <v-app-bar color="primary">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title>{{ $route.name }}</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn icon="mdi-magnify"></v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary> 
    <v-list density="compact" nav > 
          <v-list-item
          class="navigationList"
            prepend-icon="mdi-view-dashboard"
            title="Home"
            value="home"
            to="/"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-forum"
            title="Position"
            value="position"
            to="/position"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-forum"
            title="Submissions"
            value="submissions"
            to="/submissions"
          ></v-list-item>
        </v-list>
  </v-navigation-drawer>

 
    </div>
  
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
    };
  },
};
</script>