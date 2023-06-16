<template>
  <div class="page">
    <h4>Grid Layout</h4>
    <div class="grid">
      <div class="grid-item sudoku-item"></div>
      <div class="grid-item sudoku-item"></div>
      <div class="grid-item sudoku-item"></div>
      <div class="grid-item sudoku-item"></div>
      <div class="grid-item sudoku-item"></div>
      <div class="grid-item sudoku-item"></div>
      <div class="grid-item sudoku-item"></div>
      <div class="grid-item sudoku-item"></div>
      <div class="grid-item sudoku-item"></div>
    </div>
    <div class="source">
      <pre class="mb-0">
// css
.grid {
  display: grid;
  grid-template-rows: repeat(3, minmax(200px, auto));
  grid-template-columns: repeat(3, 1fr);
  grid-gap: .075rem;
}
      </pre>
    </div>
    <h4 class="mt-5">Flex Layout</h4>
    <div class="flex">
      <div class="flex-item sudoku-item"></div>
      <div class="flex-item sudoku-item"></div>
      <div class="flex-item sudoku-item"></div>
      <div class="flex-item sudoku-item"></div>
      <div class="flex-item sudoku-item"></div>
      <div class="flex-item sudoku-item"></div>
      <div class="flex-item sudoku-item"></div>
      <div class="flex-item sudoku-item"></div>
      <div class="flex-item sudoku-item"></div>
    </div>
    <div class="source">
      <pre class="mb-0">
// css
.flex {
  display: flex;
  flex-wrap: wrap;
}
.flex-item {
  flex: 0 0 33.3333%;
  max-width: 33.3333%;
  border: .0375rem solid darken($body-bg, 2%);
}
      </pre>
    </div>
    <h4 class="mt-5">Float Layout</h4>
    <div class="clearfix float">
      <div class="float-item sudoku-item"></div>
      <div class="float-item sudoku-item"></div>
      <div class="float-item sudoku-item"></div>
      <div class="float-item sudoku-item"></div>
      <div class="float-item sudoku-item"></div>
      <div class="float-item sudoku-item"></div>
      <div class="float-item sudoku-item"></div>
      <div class="float-item sudoku-item"></div>
      <div class="float-item sudoku-item"></div>
    </div>
    <div class="source">
      <pre class="mb-0">
// css
.float {
  margin-top: -0.075rem;
}
.float-item {
  float: left;
  width: calc(33.3333% - 0.075rem);
  margin-left: .075rem;
  margin-top: .075rem;
}
      </pre>
    </div>
    <h4 class="mt-5">Inline Block</h4>
    <div class="inline-block">
      <div class="inline-block-item sudoku-item"></div>
      <div class="inline-block-item sudoku-item"></div>
      <div class="inline-block-item sudoku-item"></div>
      <div class="inline-block-item sudoku-item"></div>
      <div class="inline-block-item sudoku-item"></div>
      <div class="inline-block-item sudoku-item"></div>
      <div class="inline-block-item sudoku-item"></div>
      <div class="inline-block-item sudoku-item"></div>
      <div class="inline-block-item sudoku-item"></div>
    </div>
    <div class="source">
      <pre class="mb-0">
// css
.inline-block {
  font-size: 0;
  margin-top: -.075rem;
}
.inline-block-item {
  display: inline-block;
  width: calc(33.3333% - .075rem);
  margin-left: .075rem;
  margin-top: .075rem;
}
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sudoku-index'
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";

.grid {
  display: grid;
  grid-template-rows: repeat(3, minmax(var(--sudoku-item-min-height), auto));
  grid-template-columns: repeat(3, 1fr);
  grid-gap: .075rem;
}
.sudoku-item {
  min-height: var(--sudoku-item-min-height);
  background-color: $gray-200;
}
.flex {
  display: flex;
  flex-wrap: wrap;
}
.flex-item {
  flex: 0 0 33.3333%;
  max-width: 33.3333%;
  border: .0375rem solid darken($body-bg, 2%);
}
.float {
  margin-top: -0.075rem;
}
.float-item {
  float: left;
  width: calc(33.3333% - 0.075rem);
  margin-left: .075rem;
  margin-top: .075rem;
}
.inline-block {
  font-size: 0;
  margin-top: -.075rem;
}
.inline-block-item {
  display: inline-block;
  width: calc(33.3333% - .075rem);
  margin-left: .075rem;
  margin-top: .075rem;
}
</style>
