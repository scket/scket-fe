<template>
  <v-dialog v-model="dialog">
    <template slot="activator">
      <v-btn outline color="#BDBDBD">
        <span style="color: black">
          {{ selected.message }}
        </span>
        <v-icon small>
          fas fa-chevron-down
        </v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs4 sm3>
              <v-select
                v-model="selected.pref"
                :items="prefList"
                label="都道府県"
                item-text="name"
                return-object
                @change="viewCity"
              />
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex v-for="city in cityList" :key="city.name" xs4 sm2>
              <v-checkbox v-model="selected.city" :label="city.name" :value="city.citycode" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="blue darken-1" flat @click="reset">
          Reset
        </v-btn>
        <v-btn color="blue darken-1" flat @click="save">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import prefCityList from '../../utils/prefCityList';

export default {
  data: () => {
    const prefList = [];
    for (let i = 1; i < 48; i++) {
      let StringNum;
      if(i < 10){
        StringNum = "0" + String(i);
      }
      else
      {
        StringNum = String(i);
      }

      prefList.push({
        id: prefCityList[0][StringNum].id,
        name: prefCityList[0][StringNum].name
      });
    }

    return {
      dialog: false,
      prefList: prefList,
      cityList: [],
      selected: {
        message: "地域を選択",
        pref: {},
        city: []
      }
    }
  },

  methods: {
    save () {
      this.dialog = false;
      if (this.selected.city.length > 0) {
        this.selected.message = `${this.selected.pref.name}(${this.selected.city.length})`;
        this.setSelectedCity({ city: this.selected.city });
      } else {
        this.selected.message = "地域を選択";
        // 念の為、初期化
        this.selected.city = [];
        this.resetSelectedCity();
      }
    },

    reset () {
      this.dialog = false;
      this.selected.message = "地域を選択";
      this.selected.city = [];
      this.resetSelectedCity();
    },

    viewCity () {
      this.selected.city = [];
      this.cityList = prefCityList[0][String(this.selected.pref.id)].city;
    },

    ...mapActions({
      resetSelectedCity: 'search/resetSelectedCity',
      setSelectedCity: 'search/setSelectedCity'
    })
  }
}
</script>
