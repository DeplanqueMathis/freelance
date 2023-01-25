<template>
  <div class="article-container">

    <img :src="this.$root.url_api + '/storage/' + article.image" class="article-illustration"/>

    <div v-html="article.article">

    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data: function (){

    return {

      article_id: this.$route.params.article_id,
      article: {},

    }

  },
  created() {

    const requestOptions = {
      method: "GET",
    };
    fetch(this.$root.url_api + "/api/recupere_article/" + this.article_id, requestOptions)
        .then((reponse) => reponse.json())
        .then((data) => {
          this.article = data;
        });

  }
}
</script>

<style scoped>

</style>
