<template>
  <div class="main-container pb-10">
    <div class="content d-flex">
      <div>
        <h1>
          <span>Hi, my 
            <img class="star" :src="imageUrl">
          </span>
          <span><br> name is <b class="dot">Joan</b>.</span>
        </h1>
        <p class="description">I'm a <b class="dot">front-end developer</b> from <br>Spain, Catalonia.</p>
      </div>
      <div class="time-line-container">
        <span @click="expand = !expand" class="btn-arrow mdi mdi-menu-down"></span>
        <v-expand-transition class="">
          <div v-show="expand">
            <div class="patern"></div>
            <v-timeline align="start">
                <v-timeline-item
                  v-for="(item, i) in contactItems"
                  :key="i"
                  :dot-color="item.color"
                  :icon="item.icon"
                  class="pointer"
                  fill-dot
                >
                </v-timeline-item>
            </v-timeline>
          </div>
        </v-expand-transition>
      </div>
    </div>
    <div class="b-bottom-container"></div>
    <div class="content about">
      <p class=""> 01. <span class="about-size font-weight-medium dot">About me.</span> </p>
      <div class="small-line"></div>
      <p class="font-weight-light"><span class="font-weight-medium dot">Hi there! I'm Joan, a web dev.</span> (as you might have guessed with the title)</p>
      <p class="font-italic">Growing up, I always had an affinity for everything tech-related. Building my own computers and fixing them, video editing, and setting up local servers were some of the activities that developed my problem-solving skills.</p>
      <p class="font-weight-medium dot">Today I'm enthralled by web development. Creating new experiences, implementing eye pleasing designs and making them work is what I like to do.</p>
    </div>
    <div class="techstack">
      <p class="font-weight-bold techstack-h1">The techstack</p>
      <p>I'm most familiar with these — more being added</p>
      <v-slide-group
        class=""
        v-model="model"
        center-active
        show-arrows
      >
        <v-slide-group-item
          v-for="item in techstack"
          :key="item.name"
          v-slot="{ toggle }"
        >
          <v-card
            class="carousel-card mx-2 mb-3"
            height="111"
            width="106"
            @click="toggle"
          >
          <v-img
            class="mt-3"
            height="59"
            width="106"
            :src="item.img"
            :alt="item.name"
          />
          <div class="text-below mt-1 img-font">{{ item.name }}</div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </div>
    <div class="content about">
      <p class=""> 02. <span class="about-size font-weight-medium dot">Experience.</span> </p>
      <div class="small-line"></div>
      <br>
      <p>In my <b class="dot">first year</b> as a web developer, I've worked on diverse projects, including collaborations <br> with <b class="dot">BBVA</b> during my time at <b class="dot">Accenture</b>. <br></p>
      <p class="dot font-weight-medium">This experience enhanced my skills and deepened my passion for web development. I'm now continuing this journey, contributing to impactful projects and furthering my expertise.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: require("@/assets/star-100s-200px.svg"),
      expand: false,
      model: 0,
      contactItems: [ 
        { color: 'black', icon: 'mdi-github' },
        { color: '#0077B5', icon: 'mdi-linkedin' },
        { color: 'white', icon: 'mdi-instagram' },
        { color: '#c71610', icon: 'mdi-gmail' },
      ],
      techstack: [
        { name: 'JAVASCRIPT', img: require("@/assets/js-logo.png")},
        { name: 'HTML', img: require("@/assets/html-logo.png") },
        { name: 'CSS', img: require("@/assets/css-logo.png") },
        { name: 'SQL', img: require("@/assets/sql-logo.png") },
        { name: 'MONGODB', img: require("@/assets/mongodb-logo.png") },
        { name: 'VUE', img: require("@/assets/vue-logo.png") },
        { name: 'C#', img: require("@/assets/c-logo.png") },
        { name: 'SASS', img: require("@/assets/sass-logo.png") },
        { name: 'VUETIFY', img: require("@/assets/vuetify-logo.png") },
        { name: 'VUE-ROUTER', img: require("@/assets/router-logo.png") },
        { name: 'VUEX', img: require("@/assets/vuex-logo.png") },
        { name: 'PYTHON', img: require("@/assets/python-logo.png") },
        { name: 'PHP', img: require("@/assets/php-logo.png") },
        { name: 'JEST', img: require("@/assets/jest-logo.png") },
        { name: 'QUASAR', img: require("@/assets/quasar-logo.png") },
        { name: 'GIT', img: require("@/assets/git-logo.png") },
      ]
    };
  },
  mounted() {
    setInterval(() => {
      this.model >= 15 ? (this.model = 0) : this.model+=3;
    }, 7000); // 5000 milliseconds (5 seconds)
    setTimeout(() => {
      this.expand = true;
    }, 600);
  },
};
</script>

<style lang="scss" scoped>
@import '../../../assets/style.scss';

.small-line {
  width: 10%;
  height: 3px;
  background-color: #125f5282;
  margin-bottom: 1%;
}
h1 {
  font-family: "AcornFont";
  font-weight: bold;
  font-size: 6rem;
}
.techstack-h1 {
  font-size: 2.5rem;
  color: #125f52;
}
.carousel-card {
  //Background transparent
  background-color: transparent;
  // Remove all styles
  // border: none;
  box-shadow: none;
  margin: auto;
  //Add border made of dots
  border: 0.5px #125f52 solid;
  border-style: dotted;
  border-radius: 0;


}
.techstack {
  font-family: "AcornFont";
  padding-top: 4%;
  width: 80%;
  margin: auto;
  // Create a border with the color of the dot
  background-color: #f4eee6;
  border-radius: 50px;
}
.description {
  font-family: "GTPlanar";
  font-size: 1.6rem;
}
.content {
  padding: 5% 10% 2% 15%;
  text-align: left;
  
}

.main-container {
  max-width: 1600px;
  align-content: center;
  margin: auto; 
  position: relative; /* Add this to make "patern" relative to its container */
}

.patern {
  /* Set the background size, position, and repeat pattern as needed */
  width: 52px; /* Full width of the container */
  height: 240px; /* Full height of the container */
  background-image: repeating-linear-gradient(
    45deg,
    #125f522e 10px,
    #125f522e 12px,
    transparent 12px,
    transparent 20px
  );
  position: absolute; /* Position "patern" relative to the parent container */
  //Margin Y auto
  top: 19.5%;
  // top: 0%;
  right:20%;
  z-index: -1;
  border-radius: 50px;
}
.btn-arrow {
  font-size: 2rem;
  cursor: pointer;
  margin-left: 26.5px;
  margin-top: 20%;

}
.about {
  // font-family: "GTPlanar";
  padding-right: 15%;
  padding-top: 3%;
  padding-bottom: 3%;
  font-size: 1.2rem;
}
.img-font {
  font-family: "GTPlanar";
  font-size: 0.7rem;
}
.about-size {
  font-size: 2.2rem;
}
.dot {
  color: #125f52;
}
.star {
  transform: scale(0); /* Initially set the width to 0 */
  height: 60px;
  top: -50px;
  position: relative;
  /* Define the appearance animation */
  animation: appear 0.5s ease-in-out;
  animation-delay: 0.8s; /* Delay the animation by 2 seconds */
  animation-fill-mode: both;
}


/* Define the appearance animation keyframes */
@keyframes appear {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1); 
  }
}
.time-line-container {
  //I want to move the content to the right of the div
  position: relative;
   margin-left: 15%;
   align-content: center;
}
.b-bottom-container{
  height: 2px;
  width: 80%;
  margin: auto;
  margin-top: 5%;
  border-bottom: #125f524d 2px solid;
}
</style>
