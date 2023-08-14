<template>
  <div class="page">
    <h3>Geo3D</h3>
    <div class="demo">
      <div ref="container" class="map-container"></div>
    </div>
    <div class="source">
      <pre>
    async init () {
      const container = this.$refs.container
      const json1 = await getGeoJSON('https://geo.datav.aliyun.com/areas_v3/bound/530000.json')
      const json2 = await getGeoJSON('https://geo.datav.aliyun.com/areas_v3/bound/530000_full.json')
      echarts.registerMap('yunnan', json1)
      echarts.registerMap('yunnan_full', json2)
      const myChart = this.echarts = echarts.init(container)
      let uid = 1
      const data = json2
      const option = {
        geo: [
          {
            map: 'yunnan_full',
            itemStyle: {
              areaColor: 'transparent',
              borderWidth: 1,
              borderColor: '#9fc7eb',
            },
            label: {
              show: true,
              color: 'rgba(255,255,255,0.9)',
            },
            emphasis: {
              itemStyle: {
                areaColor: 'rgba(255,255,255,0.3)',
              },
              label: {
                color: '#fff',
              },
            },
            selectedMode: 'single',
            select: {
              itemStyle: {
                areaColor: 'rgba(255,255,255,0.3)',
              },
              label: {
                color: '#fff',
              },
            },
            zlevel: 20,
          },
          {
            map: 'yunnan',
            zoom: 1,
            itemStyle: {
              areaColor: 'rgba(76, 135, 205, 0.2)',
              borderWidth: 5,
              borderColor: '#a8f4ff',
              shadowBlur: 20,
              shadowColor: 'rgba(255,255,255,0.2)'
            },
            emphasis: {
              disabled: true,
            },
            zlevel: 10,
          }
        ],
        series: [
          {
            zlevel: 21,
            type: 'effectScatter',
            coordinateSystem: 'geo',
            rippleEffect: {
              number: 3,
              period: 5,
              scale: 10,
              brushType: 'fill',
            },
            symbolSize: 5,
            itemStyle: {
              normal: {
                color: '#8afa7c'
              },
            },
            label: {
              show: false,
              color: 'red',
              formatter: '{@[2]}',
            },
            emphasis: {
              label: {
                show: true,
              },
            },
            data: [
              ...data.features.map((v, i) => ({
                value: [
                  ...v.properties.center,
                  v.childrenNum,
                ],
                itemStyle: {
                  color: i === 3 ? '#f46736' : '#8afa7c'
                },
              }))
            ]
          },
          {
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 21,
            effect: {
              show: true,
              smooth: true,
              period: 2,
              symbol: 'arrow',
              symbolSize: 4,
              trailLength: 0.01,
            },
            lineStyle: {
              color: '#fbfbd1',
              width: 1,
              opacity: 0.1,
              // curveness: 0.2,
            },
            data: [
              ...data.features.map(v => ({
                coords: [
                  v.properties.center,
                  data.features[0].properties.center,
                ],
              }))
            ],
          },
        ],
      }
      myChart.setOption(option)

      const rand = () => Math.round(Math.random() * 1000)
      const scale = 1

      const barOptions = {
        grid: [],
        xAxis: [],
        yAxis: [],
        series: option.series,
      }
      data.features.forEach((v, i) => {
        const coord = myChart.convertToPixel({ geoIndex: 0 }, v.properties.center)
        barOptions.grid.push({
          id: uid++,
          width: 50 * scale,
          height: 70 * scale,
          left: coord[0] - 50 * scale / 2,
          top: coord[1] - 50 * scale * 2,
        })
        barOptions.xAxis.push({
          id: uid++,
          gridIndex: i,
          show: false,
          type: 'category',
        })
        barOptions.yAxis.push({
          id: uid++,
          gridIndex: i,
          show: false,
          type: 'value',
        })
        barOptions.series.push({
          type: 'bar',
          coordinateSystem: 'cartesian2d',
          barWidth: 15,
          yAxisIndex: i,
          xAxisIndex: i,
          data: [rand()],
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: '#f3d871' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#b6aa84' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            },
          },
        })
        barOptions.series.push({
          type: 'bar',
          coordinateSystem: 'cartesian2d',
          barWidth: 15,
          yAxisIndex: i,
          xAxisIndex: i,
          data: [rand()],
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: '#d8ff94' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#7ea18b' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            },
          },
        })
      })

      myChart.setOption(barOptions)
    }
      </pre>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import 'echarts-gl'

async function getGeoJSON (url) {
  const res = await fetch(url)
  return res.json()
}

export default {
  name: 'geo3d',
  mounted () {
    this.init()
  },
  methods: {
    async init () {
      const container = this.$refs.container
      const json1 = await getGeoJSON('https://geo.datav.aliyun.com/areas_v3/bound/530000.json')
      const json2 = await getGeoJSON('https://geo.datav.aliyun.com/areas_v3/bound/530000_full.json')
      echarts.registerMap('yunnan', json1)
      echarts.registerMap('yunnan_full', json2)
      const myChart = this.echarts = echarts.init(container)
      let uid = 1
      const data = json2
      const option = {
        geo: [
          {
            map: 'yunnan_full',
            itemStyle: {
              areaColor: 'transparent',
              borderWidth: 1,
              borderColor: '#9fc7eb',
            },
            label: {
              show: true,
              color: 'rgba(255,255,255,0.9)',
            },
            emphasis: {
              itemStyle: {
                areaColor: 'rgba(255,255,255,0.3)',
              },
              label: {
                color: '#fff',
              },
            },
            selectedMode: 'single',
            select: {
              itemStyle: {
                areaColor: 'rgba(255,255,255,0.3)',
              },
              label: {
                color: '#fff',
              },
            },
            zlevel: 20,
          },
          {
            map: 'yunnan',
            zoom: 1,
            itemStyle: {
              areaColor: 'rgba(76, 135, 205, 0.2)',
              borderWidth: 5,
              borderColor: '#a8f4ff',
              shadowBlur: 20,
              shadowColor: 'rgba(255,255,255,0.2)'
            },
            emphasis: {
              disabled: true,
            },
            zlevel: 10,
          }
        ],
        series: [
          {
            zlevel: 21,
            type: 'effectScatter',
            coordinateSystem: 'geo',
            rippleEffect: {
              number: 3,
              period: 5,
              scale: 10,
              brushType: 'fill',
            },
            symbolSize: 5,
            itemStyle: {
              normal: {
                color: '#8afa7c'
              },
            },
            label: {
              show: false,
              color: 'red',
              formatter: '{@[2]}',
            },
            emphasis: {
              label: {
                show: true,
              },
            },
            data: [
              ...data.features.map((v, i) => ({
                value: [
                  ...v.properties.center,
                  v.childrenNum,
                ],
                itemStyle: {
                  color: i === 3 ? '#f46736' : '#8afa7c'
                },
              }))
            ]
          },
          {
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 21,
            effect: {
              show: true,
              smooth: true,
              period: 2,
              symbol: 'arrow',
              symbolSize: 4,
              trailLength: 0.01,
            },
            lineStyle: {
              color: '#fbfbd1',
              width: 1,
              opacity: 0.1,
              // curveness: 0.2,
            },
            data: [
              ...data.features.map(v => ({
                coords: [
                  v.properties.center,
                  data.features[0].properties.center,
                ],
              }))
            ],
          },
        ],
      }
      myChart.setOption(option)

      const rand = () => Math.round(Math.random() * 1000)
      const scale = 1

      const barOptions = {
        grid: [],
        xAxis: [],
        yAxis: [],
        series: option.series,
      }
      data.features.forEach((v, i) => {
        const coord = myChart.convertToPixel({ geoIndex: 0 }, v.properties.center)
        barOptions.grid.push({
          id: uid++,
          width: 50 * scale,
          height: 70 * scale,
          left: coord[0] - 50 * scale / 2,
          top: coord[1] - 50 * scale * 2,
        })
        barOptions.xAxis.push({
          id: uid++,
          gridIndex: i,
          show: false,
          type: 'category',
        })
        barOptions.yAxis.push({
          id: uid++,
          gridIndex: i,
          show: false,
          type: 'value',
        })
        barOptions.series.push({
          type: 'bar',
          coordinateSystem: 'cartesian2d',
          barWidth: 15,
          yAxisIndex: i,
          xAxisIndex: i,
          data: [rand()],
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: '#f3d871' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#b6aa84' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            },
          },
        })
        barOptions.series.push({
          type: 'bar',
          coordinateSystem: 'cartesian2d',
          barWidth: 15,
          yAxisIndex: i,
          xAxisIndex: i,
          data: [rand()],
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: '#d8ff94' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#7ea18b' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            },
          },
        })
      })

      myChart.setOption(barOptions)
    },
  },
}
</script>

<style scoped>
.demo {
  width: 100%;
  height: 660px;
  background: url('./bg.jpg') no-repeat;
  background-size: cover;
}

.map-container {
  width: 100%;
  height: 100%;
}
</style>
