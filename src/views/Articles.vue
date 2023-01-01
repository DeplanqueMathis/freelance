<template>
  <div class="articles-details">
    <h1 class="articles-details-title">Articles</h1>
    <p class="articles-details-paragraph">
      Vous retrouverez ici tous les articles de Mathis Deplanque.<br />
      Des articles qui traitent de nouveautés tech, de découvertes ou de retours
      d'expériences.
    </p>
  </div>

  <div class="articles-list">
    <div v-for="(article_id, article) in articles" :key="article_id" class="article">
      <div class="article-img">
        <img :src="article.image" />
      </div>
      <div class="article-info">
        <div class="article-title" v-html="article.title">
        </div>
        <div class="article-detail" v-html="article.detail">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data: function () {
    return {
      articles: {},
    };
  },
};
</script>

<style scoped></style>
