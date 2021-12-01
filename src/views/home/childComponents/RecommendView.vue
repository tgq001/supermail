<template>
  <div class="recommend-view">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <span>{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  components: {},
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend-view {
  display: flex;
  
}
.recommend-item {
  flex: 1;
  /* padding: 5px; */
}
.recommend-item img {
  width: 75%;
}
.recommend-item a {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  vertical-align: middle;
  text-align: center;
  color: #333333;
  font-size: 12px;
}
</style>