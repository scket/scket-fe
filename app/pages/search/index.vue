<template>
  <div>
    <br>
    <div>検索結果画面</div>
    <br>
    <div>locateId: {{ this.$route.query.locateId }}</div>
    <br>
    <div>date: {{ this.$route.query.date }}</div>
    <br>
    <div>keyword: {{ this.$route.query.keyword }}</div>
  </div>
</template>

<script>
export default {
  asyncData: ({query}) => {
    // ここでクエリを受け取ってAPIを叩いて検索結果を受け取る
    console.log(query);
  }
}
</script>

<style scoped>

</style>
