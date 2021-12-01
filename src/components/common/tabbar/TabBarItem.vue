<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :class="{ active: isActive }">
      <slot name="icon"></slot>
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path == this.path;
    },
  },
  methods: {
    getRed() {
      return "red";
    },
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>

.tab-bar-item {
  flex: 1;
  height: 49px;
  /* border-right: 1px solid #000; */
  /* line-height: 49px; */
  text-align: center;
}

.tab-bar-item div {
  display: flex;
  flex-direction: column;
}

.tab-bar-item div span {
  flex: 1;
}

.active {
  color: crimson;
}
</style>