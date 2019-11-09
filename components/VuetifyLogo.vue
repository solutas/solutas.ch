<template>
  <img
    class="VuetifyLogo"
    alt="Vuetify Logo"
    src="https://solutas.ch/wp-content/uploads/2019/09/solutas-brief-1.png"
  >
</template>

<style>
.VuetifyLogo {
  width: 300px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
