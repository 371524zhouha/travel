<template>
  <div>
    <city-header></city-header>
    <city-search :cities="allcities"></city-search>
    <city-list :hot="hotCities" :cities="allcities" :letter="letter"></city-list>
    <city-alphabet :cities="allcities" @change="handleletterchange">
    </city-alphabet>
  </div>
</template>

<script>
import axious from 'axios'
import CityHeader from './cpmponents/header'
import CitySearch from './cpmponents/search'
import CityList from './cpmponents/list'
import CityAlphabet from './cpmponents/alphabet'
export default {
  name: 'city',
  components: {
    CityAlphabet,
    CitySearch,
    CityHeader,
    CityList},
  data () {
    return {
      allcities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axious.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.allcities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleletterchange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style  lang="stylus" scoped>

</style>
