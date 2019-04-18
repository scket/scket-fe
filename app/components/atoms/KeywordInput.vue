<template>
  <form action="#" class="pc-header-form">
    <input
      v-model="keyword"
      type="search"
      name="keyword"
      placeholder="助っ人を探す"
      class="input-default"
      @change="updateKeyword"
    >
  </form>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  data: () => ({
    keyword: ''
  }),

  methods: {
    updateKeyword () {
      this.setKeyword({ keyword: this.keyword });
    },

    ...mapActions({
      setKeyword: 'search/setKeyword'
    })
  }
}
</script>


<style scoped>
  .pc-header-form {
    position: relative;
    width: 100%;
    padding: 0 8px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .pc-header-form .input-default {
    background: #f5f5f5;
    border-radius: 4px;
    padding: 0 10px;
    width: 100%;
    height: 36px;
    -webkit-transition: all ease-out .3s;
    transition: all ease-out .3s;
    color: #000;
  }
</style>
