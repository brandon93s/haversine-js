'use strict'

import test from 'ava'
import fn from './'

const atlanta = {
  latitude: 33.7490,
  longitude: -84.3880
}

const london = {
  latitude: 51.5074,
  longitude: -0.1278
}

const sydney = {
  latitude: -33.8688,
  longitude: 151.2093
}

function toRads (degrees) {
  return degrees * (Math.PI / 180)
}

test('constants are correct', t => {
  t.is(fn.EARTH.MILE, 3959)
  t.is(fn.EARTH.KM, 6371)
  t.is(fn.EARTH.M, 6371000)
  t.is(fn.EARTH.NMI, 3440)
})

test('defaults to miles', t => {
  const expected = fn(atlanta, london, {
    radius: fn.EARTH.MILE
  })

  t.is(fn(atlanta, london), expected)
})

test('supports radians input', t => {
  let atlantaRads = Object.assign({}, atlanta)
  let londonRads = Object.assign({}, london)

  atlantaRads.latitude = toRads(atlantaRads.latitude)
  atlantaRads.longitude = toRads(atlantaRads.longitude)

  londonRads.latitude = toRads(londonRads.latitude)
  londonRads.longitude = toRads(londonRads.longitude)

  t.is(fn(atlanta, london), fn(atlantaRads, londonRads, {
    isRadians: true
  }))
})

function macro (t, input, expected) {
  t.is(parseInt(fn(input[0], input[1], input[2]).toFixed(0), 10), expected)
}

test('atlanta to sydney default', macro, [atlanta, sydney], 9287)
test('atlanta to london default', macro, [atlanta, london], 4207)
test('london to sydney default', macro, [london, sydney], 10560)
test('atlanta to sydney meters', macro, [atlanta, sydney, {
  radius: fn.EARTH.M
}], 14944765)
