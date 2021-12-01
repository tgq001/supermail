<template>
  <nav-bar class="home-bar">
    <template v-slot:center><div>购物车</div></template>
  </nav-bar>
  <home-swiper :banner="banner" />
  <recommend-view :recommend="recommend" />
  <feature-view/>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import HomeSwiper from "./childComponents/HomeSwiper";
import RecommendView from "./childComponents/RecommendView";
import FeatureView from "./childComponents/FeatureView";

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
  },
  data() {
    return {
      banner: {},
      recommend: {},
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      console.log(this.banner);
    });
  },
};
</script>

<style>
.home-bar {
  position: fixed;
  top: 0;
  left: 50%;
  width: 100%;
  max-width: 540px;
  transform: translate(-50%);
  z-index: 1;
  color: #fff;
  background-color: pink;
}
</style>