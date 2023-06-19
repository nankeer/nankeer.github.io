<template>
  <div class="page">
    <h2>DayJS</h2>
    <div class="blockquote">
      Day.js is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API.
      <a href="https://day.js.org/" target="_blank">https://day.js.org/</a>
    </div>
    <h4>Common API</h4>
    <div class="source">
      <pre class="mb-0">
import dayjs from 'dayjs'

// parse: undefined, string, string + format, date, object, array, dayjs
dayjs()
dayjs('2023-06-17 10:05')
dayjs("12-25-1995", "MM-DD-YYYY") // This requires CustomParseFormat plugin.
dayjs(new Date())
dayjs({year: 2010, month: 3, day: 5, hour: 15, minute: 10, second: 3, millisecond: 123}) // This requires ObjectSupport plugin.
dayjs([2010, 6, 10]) // This requires ArraySupport plugin.
dayjs(dayjs())

// validate
dayjs('some invalid string').isValid() // -> false

// clone
var a = dayjs()
var b = a.clone()
var b = dayjs(a)

// i18n
require('dayjs/locale/zh-cn')
dayjs.locale('zh-cn')

// get unit: date,day,month,year,month,hour,minute,second,millisecond
dayjs().get(unit) === dayjs()[unit]() // dayjs().get('month')

// set
dayjs().set(unit, value) === dayjs()[unit](value) // dayjs().set('month', 2)

// manipulate
dayjs('2019-01-25').add(1, 'day').subtract(1, 'year').year(2009).toString()

// display YY|YYYY M|MM|MMM D|DD H|HH m|mm s|ss
dayjs('2019-01-25').format('[YYYYescape] YYYY-MM-DD') // -> YYYYescape 2019-01-25 Notes: To escape characters, wrap them in square brackets

// plugin
var dayOfYear = require('dayjs/plugin/dayOfYear')
dayjs.extend(dayOfYear)
dayjs('2010-01-01').dayOfYear() // -> 1
dayjs('2010-01-01').dayOfYear(365) // -> 2010-12-31

var quarterOfYear = require('dayjs/plugin/quarterOfYear')
dayjs.extend(quarterOfYear)
dayjs('2010-04-01').quarter() // 2
dayjs('2010-04-01').quarter(2)

var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
dayjs().from(dayjs('1990-01-01'))
dayjs('2010-04-01').fromNow()
dayjs().to(dayjs('1990-01-01'))
dayjs().toNow()

var isLeapYear = require('dayjs/plugin/isLeapYear')
dayjs.extend(isLeapYear)
dayjs().isLeapYear()
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dayjs-index'
}
</script>

<style scoped>

</style>
