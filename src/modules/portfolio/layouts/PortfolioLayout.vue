<template>
    <div>
        <router-view v-slot="{ Component}">
            <transition enter-active-class="animate__animated animate__fadeInUp">
                <component :is="Component" />
            </transition>
        </router-view >
    </div>
    <!-- <Footers class="footer"/> -->
</template>

<script>
// import { defineAsyncComponent } from 'vue'
// import { mapActions, mapState } from 'vuex'

export default {
    components: {
        // NavBar: defineAsyncComponent(() => import('../components/NavBar.vue'))
        // EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
    },
    methods: {
        // ...mapActions('portfolio', ['loadEntries'])
    },
    computed: {
        // ...mapState('portfolio', ['dayNight'])
    },
    created () {
        //Solo hace falta el load si no tenemos el valor default puesto en el store ------------------
        // this.loadEntries()
    }
}
</script>
<style lang="scss" scoped>
.page {
  position: absolute;
  top: 50px;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-out;
}
</style>