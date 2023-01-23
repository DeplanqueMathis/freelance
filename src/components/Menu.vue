<template>
  <div class="menu" :class="{ active: $root.afficher_menu }">
    <div class="menu-container">
      <div class="menu-container-separator"></div>
      <div class="menu-container-separator"></div>
      <div class="menu-nav">
        <div>
          <router-link to="/">Accueil</router-link>
        </div>
        <div>
          <router-link to="/articles">Articles</router-link>
        </div>
        <div>
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
      <div class="menu-close-cross" @click="$root.afficher_menu = false"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  mounted() {
    console.log(this.$route.name);
  },
};
</script>

<style scoped></style>
