<script setup>
defineProps({ color: { type: String, required: true } })
</script>

<template>
  <span class="prism-swatch-wrap">
    <span class="prism-swatch-checker">
      <span class="prism-swatch-color" :style="{ backgroundColor: color }"></span>
    </span>
  </span>
</template>

<style scoped>
.prism-swatch-wrap {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  margin-right: 6px;
}
.prism-swatch-checker {
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  overflow: hidden;
  background-image:
    linear-gradient(45deg, #ccc 25%, #fff 25%),
    linear-gradient(-45deg, #ccc 25%, #fff 25%),
    linear-gradient(45deg, #fff 75%, #ccc 75%),
    linear-gradient(-45deg, #fff 75%, #ccc 75%);
  background-size: 8px 8px;
  background-position: 0 0, 0 4px, 4px -4px, -4px 0;
  position: relative;
  flex-shrink: 0;
}
.prism-swatch-color {
  position: absolute;
  inset: 0;
}
</style>
