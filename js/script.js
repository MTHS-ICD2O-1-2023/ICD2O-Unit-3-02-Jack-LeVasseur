// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jack LeVasseur
// Created on: April 2 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculatePermeterAndAreaOfRectangle() {
  // input
  const baseOfTriangle = parseInt(document.getElementById('length-of-rectangle').value)
  const heightOfTriangle = parseInt(document.getElementById('width-of-rectangle').value)

  // process
  const areaOfTriangle = baseOfTriangle + heightOfTriangle + 13.03
  const HeightOfTriangle = (baseOfTriangle + heightOfTriangle) + 13.03

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + areaOfTriangle + ' mm³'
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeterOfRectangle + 'mm³'
}
