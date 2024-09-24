<script setup lang="ts"></script>

<template>
  <div class="progress"></div>
</template>

<style scoped lang="scss">
.progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translate(calc(var(--progress-down) * -100%));
  transition: 1s ease;
  background-color: rgba($color: #000000, $alpha: 0.05);
  border-radius: 0 calc(var(--progress-down) * 100%)
    calc(var(--progress-down) * 100%) 0;
  box-shadow: inset 0 0 50px rgba($color: #000000, $alpha: 0.1);
}
</style>
