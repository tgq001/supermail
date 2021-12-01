<template>
  <div id="main-tab-bar">
    <tab-bar>
      <!-- <div class="tab-bar-items">首页</div>
    <div class="tab-bar-items">分类</div>
    <div class="tab-bar-items">购物车</div>
    <div class="tab-bar-items">我的</div> -->
      <tab-bar-item path="/home">
        <template v-slot:icon>
          <span class="iconfont">&#xe69c;</span>
        </template>
        <template v-slot:text>
          <span>首页</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:icon>
          <span class="iconfont">&#xe6ec;</span>
        </template>
        <template v-slot:text>
          <span>分类</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/shopcar">
        <template v-slot:icon>
          <span class="iconfont">&#xe6e6;</span>
        </template>
        <template v-slot:text>
          <span>购物车</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:icon>
          <span class="iconfont">&#xe6a4;</span>
        </template>
        <template v-slot:text>
          <span>我的</span>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
.main-tab-bar{
  width: 100%;
}
</style>