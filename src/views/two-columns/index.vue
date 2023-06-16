<template>
  <div class="page">
    <h4>Float Layout</h4>
    <div class="clearfix float">
      <aside class="aside"></aside>
      <div class="main"></div>
    </div>
    <div class="source">
      <pre class="mb-0">
// scss
.float {
  .aside {
    float: left;
  }
  .main {
    margin-left: $aside-width;
  }
}
      </pre>
    </div>
    <h4 class="mt-5">Flex Layout</h4>
    <div class="flex">
      <aside class="aside"></aside>
      <div class="main"></div>
    </div>
    <div class="source">
      <pre class="mb-0">
// scss
.flex {
  display: flex;
  .aside {
    flex-shrink: 0;
  }
  .main {
    flex: 1;
  }
}
      </pre>
    </div>
    <h4 class="mt-5">Position Layout</h4>
    <div class="position">
      <aside class="aside"></aside>
      <div class="main"></div>
    </div>
    <div class="source">
      <pre class="mb-0">
// scss
.position {
  position: relative;
  .aside {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
  }
  .main {
    padding-left: $aside-width;
  }
}
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'two-column'
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";

.float,
.flex,
.position {
  height: var(--two-columns-demo-height);
  width: 100%;
}
.aside,
.main {
  height: 100%;
}
.aside {
  width: var(--two-columns-aside-width);
  background-color: $gray-300;
}
.main {
  background-color: $gray-200;
}
.float {
  .aside {
    float: left;
  }
  .main {
    margin-left: var(--two-columns-aside-width);
  }
}
.flex {
  display: flex;
  .aside {
    flex-shrink: 0;
  }
  .main {
    flex: 1;
  }
}
.position {
  position: relative;
  .aside {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
  }
  .main {
    padding-left: var(--two-columns-aside-width);
  }
}
</style>
