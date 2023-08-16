<template>
    <div>
        <SideNavigation/>
        <slot/>
    </div>
       
</template>

<script>
import TopBar from '../components/TopBar.vue'
import SideNavigation from "../components/SideNavigation.vue";

export default {
    components:{ TopBar,SideNavigation }
}
</script>