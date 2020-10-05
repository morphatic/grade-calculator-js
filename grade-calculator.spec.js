/**
 * DO NOT ALTER THIS FILE!!!
 *
 * This file contains a set of unit tests describing the functions
 * that will be a part of a library of grade calculation functions.
 * Your job is to write the code in grade-calculator.js to make ALL
 * of these tests pass.
 */

// import functions to be tested
const { average, dropLowest, calculateGPA } = require('./grade-calculator')

describe('A library of grade calculation functions', () => {
  // this is our smoke test
  it('can blow smoke', () => {
    expect(true).toBe(true)
  })

  it('can calculate an average', () => {
    // given this hypothetical collection of number grades
    let grades = [87, 92, 55, 100, 79]
    expect(average(grades)).toBe(82.6)
    // given this different set
    grades = [99, 24, 75.2, 84, 87, 82]
    expect(average(grades)).toBe(75.2)
  })

  it('can drop the lowest grade from a set', () => {
    // given this hypothetical collection of number grades
    let grades = [87, 92, 55, 100, 79]
    expect(dropLowest(grades)).toEqual([87, 92, 100, 79])
    expect(dropLowest(grades).length).toBe(4)
    // given this different set
    grades = [99, 24, 75.2, 84, 87, 82]
    expect(dropLowest(grades)).toEqual([99, 75.2, 84, 87, 82])
    expect(dropLowest(grades).length).toBe(5)
  })

  it('can calculate a GPA', () => {
    // given this standard GPA weighting scale
    const weights = {
      A: 4,
      'A-': 3.7,
      'B+': 3.3,
      B: 3,
      'B-': 2.7,
      'C+': 2.3,
      C: 2,
      'C-': 1.7,
      'D+': 1.3,
      D: 1,
      'D-': 0.7,
      F: 0,
    }
    // for this set of grades
    let grades = ['A', 'B-', 'C+', 'B', 'B', 'F']
    expect(calculateGPA(grades, weights)).toBe(2.4)
    // and for this other set of grades
    grades = ['D+', 'C', 'C', 'B+', 'A-', 'A-', 'A']
    expect(calculateGPA(grades, weights)).toBe(2.88)
  })
})
