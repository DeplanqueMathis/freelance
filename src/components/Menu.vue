<template>
  <div class="menu" :class="{ active: $root.afficher_menu }">
    <div class="menu-container">
      <div class="menu-container-separator"></div>
      <div class="menu-container-separator"></div>
      <div class="menu-nav">
        <div>
          <a href="/" :class="{ active: this.$route.name == 'Home' }">
            Accueil
          </a>
        </div>
        <div>
          <a href="/articles" :class="{ active: this.$route.name == 'Articles' }">
            Articles
          </a>
        </div>
        <div>
          <a href="/contact" :class="{ active: this.$route.name == 'Contact' }">
            Contact
          </a>
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
