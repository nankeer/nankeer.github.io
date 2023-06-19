<template>
  <div class="page">
    <h2>Isotope</h2>
    <div class="blockquote">
      Filter & sort magical layouts
      <a href="https://isotope.metafizzy.co/" target="_blank">https://isotope.metafizzy.co//</a>
    </div>
    <h4>Filter</h4>
    <p>Isotope can hide and show item elements with the filter option. Items that match that filter will be shown. Items that do not match will be hidden.</p>
    <div class="button-group">
      <button type="button" class="btn btn-dark" @click="clickFilterButton('*')">Show All</button>
      <button type="button" class="btn btn-primary" @click="clickFilterButton('.berry')">Berry</button>
      <button type="button" class="btn btn-secondary" @click="clickFilterButton('.melon')">Melon</button>
      <button type="button" class="btn btn-success" @click="clickFilterButton('.acorn')">Acorn</button>
      <button type="button" class="btn btn-danger" @click="clickFilterButton('.drupe')">Drupe</button>
      <button type="button" class="btn btn-warning" @click="clickFilterButton('.kernel')">Kernel</button>
    </div>
    <div class="row no-gutters" style="margin-left:-2px;margin-right:-2px;" id="filter-layout">
      <div class="col-4 col-md-3 col-lg-2" v-for="item in fruits" :key="item.value" :class="item.type">
        <div class="demo">{{item.value}}</div>
      </div>
    </div>
    <h4 class="mt-5">SortBy</h4>
    <p>Isotope can rearrange the order of item elements based on their data.</p>
    <div class="button-group">
      <button type="button" class="btn btn-dark" @click="clickSortButton('original-order')">Original Order</button>
      <button type="button" class="btn btn-primary" @click="clickSortButton('asc')">ASC Order</button>
      <button type="button" class="btn btn-secondary" @click="clickSortButton('desc')">DESC Order</button>
      <button type="button" class="btn btn-warning" @click="clickSortButton('random')">Random Order</button>
    </div>
    <div class="row no-gutters" style="margin-left:-2px;margin-right:-2px;" id="sort-by-layout">
      <div class="col-4 col-md-3 col-lg-2" v-for="(item, index) in numbers" :key="index">
        <div class="demo">{{item}}</div>
      </div>
    </div>
    <h4 class="mt-5">Layout Mode</h4>
    <p><code>masonry</code>, <code>fitRows</code>, and <code>vertical</code> are included in Isotope by default. All other layout modes need to installed separately.</p>
    <div class="row no-gutters" style="margin-left:-2px;margin-right:-2px;" id="layout-layout">
      <div class="col-4 col-md-3 col-lg-2" v-for="(item, index) in heights" :key="index">
        <div class="demo" :style="{height: item + 'px'}">{{item}} <span style="font-size:.8rem;font-family: sans-serif;">px</span></div>
      </div>
    </div>
  </div>
</template>

<script>
// import Isotope from 'isotope-layout/js/isotope'
import Isotope from '@/libs/isotope.pkgd'

const fruits = {
  berry: [
    'Strawberries',
    'mulberries',
    'cranberries',
    'blueberries',
    'blackberries',
    'raspberries',
    'red vinegarberries'
  ],
  melon: [
    'Watermelon',
    'melon',
    'cantaloupe'
  ],
  acorn: [
    'Tangerine',
    'orange',
    'kumquat',
    'lemon',
    'grapefruit',
    'pomelo'
  ],
  drupe: [
    'Cherry',
    'peach',
    'plum',
    'jujube',
    'olive',
    'longan',
    'lychee'
  ],
  kernel: [
    'apple',
    'pear',
    'persimmon',
    'loquat'
  ],
}
export default {
  name: 'isotope-layout',
  data () {
    return {
      fruits: Object.keys(fruits).reduce((acc, v) => {
        const values = fruits[v]
        values.forEach(vv => {
          acc.push({
            type: v,
            value: vv
          })
        })
        return acc
      }, []),
      numbers: [3, 2, 4, 5, 6, 7, 8, 1, 11, 12, 21, -1, -5],
      heights: Array(100).fill(1).map(() => Math.round(Math.random() * 300 + 100)),
      filterIsotope: null,
      sortByIsotope: null,
      layoutIsotope: null,
    }
  },
  beforeDestroy () {
    this.filterIsotope.destroy()
    this.filterIsotope = null

    this.sortByIsotope.destroy()
    this.sortByIsotope = null
  },
  mounted () {
    this.makeIsotope()
  },
  methods: {
    makeIsotope () {
      this.filterIsotope = new Isotope('#filter-layout')
      this.sortByIsotope = new Isotope('#sort-by-layout', {
        getSortData: {
          asc: function (itemElem) {
            return parseFloat(itemElem.querySelector('.demo').textContent)
          },
          desc: function (itemElem) {
            return parseFloat(itemElem.querySelector('.demo').textContent)
          },
        },
      })
      this.layoutIsotope = new Isotope('#layout-layout')
    },
    clickFilterButton (filterValue) {
      if (this.filterIsotope) {
        this.filterIsotope.arrange({
          filter: filterValue,
        })
      }
    },
    clickSortButton (sortByValue) {
      if (this.sortByIsotope) {
        this.sortByIsotope.arrange({
          sortBy: sortByValue,
          sortAscending: sortByValue !== 'desc'
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";

.button-group ::v-deep .btn {
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 16px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
}
.demo {
  width: 100%;
  height: var(--isotope-layout-filter-demo-height);
  padding: 1rem;
  border: 2px solid $body-bg;
  color: $gray-500;
  background: darken($body-bg, 2%);
}
</style>
