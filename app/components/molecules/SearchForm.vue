<template>
  <v-container style="height: 100%; padding: 0;">
    <v-layout style="height: 100%;" align-center row fill-height wrap>
      <prefecture-select />
      <date-select />
      <keyword-input />
      <v-btn @click="search">検索</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import PrefectureSelect from '../atoms/PrefectureSelect';
import DateSelect from '../atoms/DateSelect';
import KeywordInput from '../atoms/KeywordInput';

export default {
  components: {
    PrefectureSelect,
    DateSelect,
    KeywordInput
  },

  computed: {
    ...mapGetters({
      selectedCity: 'search/selectedCity',
      selectedDate: 'search/selectedDate',
      keyword: 'search/keyword'
    })
  },

  methods: {
    search () {
      this.$router.push({
        path: 'search',
        query: {
          locateId: this.selectedCity,
          date: this.selectedDate,
          keyword: this.keyword
        }
      });
    }
  }
}
</script>
