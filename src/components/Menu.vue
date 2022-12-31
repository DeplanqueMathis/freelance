<template>
  <div class="menu" :class="{ active: $root.afficher_menu }">
    <div class="menu-container">
      <div class="menu-container-separator"></div>
      <div class="menu-container-separator"></div>
      <div class="menu-nav">
        <div>
          <a href="/" :class="{ active: true }">Accueil</a>
        </div>
        <div>
          <a href="/" :class="{ active: false }">Accueil</a>
        </div>
        <div>
          <a href="/" :class="{ active: false }">Accueil</a>
        </div>
        <div>
          <a href="/" :class="{ active: false }">Accueil</a>
        </div>
        <div>
          <a href="/" :class="{ active: false }">Accueil</a>
        </div>
      </div>
      <div class="menu-close-cross" @click="$root.afficher_menu = false"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style scoped></style>
