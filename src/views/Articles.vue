<template>
  <div class="articles-container">
    <div class="articles-details">
      <h1 class="articles-details-title">Articles</h1>
      <p class="articles-details-paragraph">
        Vous retrouverez ici tous les articles de Mathis Deplanque.<br />
        Des articles qui traitent de nouveautés tech, de découvertes ou de retours
        d'expériences.
      </p>
    </div>
  
    <div class="articles-list">
      <router-link
        v-for="(article, article_id) in articles"
        :key="article_id"
        class="article-item"
        :to="'/article/' + article.id"
      >
        <div class="article-item-img">
          <img :src="this.$root.url_api + '/storage/' + article.image" />
        </div>
        <div class="article-item-info">
          <div class="article-item-title" v-html="article.titre"></div>
          <div class="article-item-detail" v-html="article.article.replaceAll(/<h1.+<\/h1>/g, '')"></div>
        </div>
      </router-link>
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
  created() {
    const requestOptions = {
      method: "GET",
    };
    fetch(
      this.$root.url_api + "/api/recupere_all_article",
      requestOptions
    )
      .then((reponse) => reponse.json())
      .then((data) => {
        this.articles = data;
      });
  },
};
</script>

<style scoped></style>
