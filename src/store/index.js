import Vue from 'vue';
import Vuex from 'vuex';
import films from './films';
import film from './film';
import planets from './planets';
import people from './people';
import starships from './starships';
import search from './search';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { films, film, planets, people, starships, search },
});
