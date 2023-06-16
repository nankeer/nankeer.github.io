<template>
  <div class="page">
    <h4>Holy Grail Layout</h4>
    <div class="holy-grail">
      <div class="center">center</div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
    <div class="source">
      <pre class="mb-0">
// scss
.holy-grail {
  padding-left: var(--three-columns-left-width);
  padding-right: var(--three-columns-right-width);
  @include clearfix();
  .left, .right, .center {
    float: left;
  }
  .left {
    margin-left: -100%;
    position: relative;
    left: calc(-1 * (var(--three-columns-left-width)));
  }
  .right {
    margin-left: calc(-1 * (var(--three-columns-right-width)));
    position: relative;
    right: calc(-1 * (var(--three-columns-right-width)));
  }
  .center {
    width: 100%;
  }
}
      </pre>
    </div>
    <h4 class="mt-5">Double Wing Layout</h4>
    <div class="double-wing">
      <div class="center">
        <div class="center-inner">center</div>
      </div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
    <div class="source">
      <pre class="mb-0">
// scss
.double-wing {
  @include clearfix();
  .left, .right, .center {
    float: left;
  }
  .left {
    margin-left: -100%;
  }
  .right {
    margin-left: calc(-1 * (var(--three-columns-right-width)));
  }
  .center {
    width: 100%;
  }
  .center-inner {
    height: 100%;
    margin-left: var(--three-columns-left-width);
    margin-right: var(--three-columns-right-width);
  }
}
      </pre>
    </div>
    <h4 class="mt-5">Flex Layout</h4>
    <div class="flex">
      <div class="center">center</div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
    <div class="source">
      <pre class="mb-0">
// scss
.flex {
  display: flex;
  .left,.right {
    flex-shrink: 0;
  }
  .center {
    flex: 1;
    order: 1;
  }
  .right {
    order: 2;
  }
}
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'three-columns'
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";

$left-width: 200px;
$right-width: 200px;
.holy-grail,
.double-wing,
.flex {
  width: 100%;
  height: var(--three-columns-height);
}
.left,
.right,
.center {
  height: 100%;
}
.left {
  width: var(--three-columns-left-width);
  background-color: $gray-300;
}
.right {
  width: var(--three-columns-right-width);
  background-color: $gray-300;
}
.center {
  background-color: $gray-200;
}
.holy-grail {
  padding-left: var(--three-columns-left-width);
  padding-right: var(--three-columns-right-width);
  @include clearfix();
  .left, .right, .center {
    float: left;
  }
  .left {
    margin-left: -100%;
    position: relative;
    left: calc(-1 * (var(--three-columns-left-width)));
  }
  .right {
    margin-left: calc(-1 * (var(--three-columns-right-width)));
    position: relative;
    right: calc(-1 * (var(--three-columns-right-width)));
  }
  .center {
    width: 100%;
  }
}
.double-wing {
  @include clearfix();
  .left, .right, .center {
    float: left;
  }
  .left {
    margin-left: -100%;
  }
  .right {
    margin-left: calc(-1 * (var(--three-columns-right-width)));
  }
  .center {
    width: 100%;
  }
  .center-inner {
    height: 100%;
    margin-left: var(--three-columns-left-width);
    margin-right: var(--three-columns-right-width);
  }
}
.flex {
  display: flex;
  .left,.right {
    flex-shrink: 0;
  }
  .center {
    flex: 1;
    order: 1;
  }
  .right {
    order: 2;
  }
}
</style>
