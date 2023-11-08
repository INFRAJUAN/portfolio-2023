<template>
  <div class="ocean">
    <div class="wave"></div>
  </div>
    <NavBar/>
    <router-view/>
    <Footers class="footer"/>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
        NavBar: defineAsyncComponent(() => import('@/modules/portfolio/components/NavBar.vue')),
        Footers: defineAsyncComponent(() => import('@/modules/portfolio/components/Footers.vue'))

    },
}
</script>

<style lang="scss">
@import '../src/assets/style.scss';

.footer{
  bottom: 0;
}
.ocean {
  height: 5%;
  width: 100%;
  z-index: -1000;
  // transform: rotate(180deg);
  //With position absolute a

}
.acorn-font {
  font-family: "AcornFont";
}
.wave {
  margin-top:-75px;
  position : absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  // background: url('../src/assets/Ocean-1.3s-3000px.svg');
  // the background image is repeated when the screen is too smalll
  background-image: url('../src/assets/Ocean-1.3s-3000px.svg');
  //I can see a cut in the image when the screen is too big
  background-size: cover;

}

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}
@-webkit-keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}
@keyframes swell {
  0%, 100% {
    transform: translate3d(0,-25px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
  }
}
:root {
  --fontColor: #748cab;
  --fontColorLight: #fff;
  --titleFont: "AcornFont", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  --bodyFont: "gt", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  --ampFont: Baskerville, "Goudy Old Style", Palatino, "Book Antiqua", serif;
  --systemFont: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  --monoFont: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", monospace;
}
#app {
  color: var(--fontColor);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
body {
  font-family: var(--bodyFont);
  line-height: 1.5;
  background-color: #ebe3db;
  color: #125f52;
  //Family font

}
</style>
