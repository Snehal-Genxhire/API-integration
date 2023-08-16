<template>
  <div>
    <h1>Home</h1>
    <h1>{{ userStore.user }}</h1>
  </div> 
</template>
<script>
import {useUserStore} from "../stores/userStore";



export default ({
  name: 'HomeView',
  components:{},

  setup(){
  const userStore = useUserStore()

  return{userStore}
  }
});
</script>
