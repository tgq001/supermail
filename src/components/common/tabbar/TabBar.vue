<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
#tab-bar {
  display: flex;
  position: fixed;
  left: 50%;
  bottom: 0;
  width: 100%;
  max-width: 540px;
  transform: translateX(-50%);
  font-size: 12px;
  background: #f6f6f6;
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 1);
}
</style>