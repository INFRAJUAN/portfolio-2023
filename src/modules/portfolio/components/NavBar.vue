<template>
  <header class="sticky-top">
  <nav class="nav-boxing font-weight-medium">
    <ul class="main px-4" :class="{ blur: isScrolled }">
      <li class="px-1 " v-for="link in links" :key="link.name">
        <router-link
          :to="link.path"
          class="px-5 py-2 hover text-decoration-none rounded-xl "
          :class="{ active: $route.name === link.name }"
        >
          {{ link.text }} <span v-if="link.name === 'work'" class="ml-1 roundedBar font-weight-bold">/</span>
        </router-link>
      </li>
    </ul>
  </nav>
  <!-- Im going to create a dayNight button -->
  <!-- <button @click="dayNightChange()">Day/Night</button> -->

</header>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      links: [
        { name: 'work', path: '/', text: 'Work' },
        { name: 'about', path: '/about', text: 'About' },
        { name: 'notes', path: '/notes', text: 'Notes' },
        { name: 'contact', path: '/contact', text: 'Contact' },
        // { name: 'impossible-list', path: '/list', text: 'List' }
      ],
      isScrolled: false
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    ...mapState('portfolio', ['dayNight'])
  },
  methods: {
    ...mapActions('portfolio', ['updateEntry']),

    handleScroll() {
      if (window.scrollY > 50) { // Cambia 100 por la posición de desplazamiento deseada
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
    dayNightChange() {
      // Como ya tenemos el valor en el store, solo tenemos que cambiarlo
      this.updateEntry({ dayNight: this.dayNight })
    }

  },
};
</script>

<style lang="scss" scoped>
a {
  color: inherit;
}
.sticky-top {
  position: sticky;
  top: 26px;
  z-index: 1000;
}
a:hover:not(.active) {
  transition: all 0.2s linear;
  // background-color: hsla(0, 0%, 100%, 0.5);
  color: white;
  //Make the text brighter on hover
  filter: brightness(2);

}

.active {
  transition: all 0.3s linear;
  background-color: hsla(0, 0%, 100%, 0.90) !important;
  color: #466b5a;
  }
.blur {
  transition: all 0.1s linear;
  background-color: hsla(45deg, 17%, 95%, .6);
  backdrop-filter: blur(20px) saturate(1.7);
  -webkit-backdrop-filter: blur(20px) saturate(1.7);
  color: #466b5a !important;
}
nav.nav-boxing {
  font-family: 'GTPlanar';
  font-size: 18px;
  display: flex;  
  justify-content: center;
  align-items: center;
  max-width: 1600px;
  margin: 26px auto 0;
  position: relative;
  z-index: 1010;
}

ul.main {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: calc(15px - 10px);
  border-radius: 50px;
  transition: all 0.3s linear;
  color: white;

  li {
    display: flex;
    position: relative;

    .roundedBar {
      // border: 1.2px solid rgb(155, 155, 155);
      // border-radius: 25%;
      // padding: 0 7px;
      // replace the border for box-shadow
      box-shadow: 0 0 0 2px rgba(0,0,0,.05);;
      border-radius: 25%;
      padding: 0 7px;
    }
  }
}
</style>

