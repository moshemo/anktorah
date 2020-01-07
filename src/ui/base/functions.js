// import { css } from '@emotion/core'
// import { breakpoints as bp } from './theme'

// export const minQuery = n => {
//   const bpArray = Object.keys(bp).map(key => [key, bp[key]])

//   const [result] = bpArray.reduce((acc, [name, size]) => {
//     if (n === name) return [...acc, `@media (min-width: ${size}px)`]
//     return acc
//   }, [])

//   return result
// }

// export const maxQuery = n => {
//   const bpArray = Object.keys(bp).map(key => [key, bp[key]])

//   const [result] = bpArray.reduce((acc, [name, size]) => {
//     if (n === name) return [...acc, `@media (max-width: ${size - 1}px)`]
//     return acc
//   }, [])

//   return result
// }

// // min-width
// export const above = Object.keys(breakpoints).reduce(
//   (mediaQuery, breakpoint) => {
//     mediaQuery[breakpoint] = (...args) => css`
//       @media screen and (min-width: ${breakpoints[breakpoint]}px) {
//         ${css(...args)}
//       }
//     `
//     return mediaQuery
//   },
//   {}
// )

// // max-width
// export const below = Object.keys(breakpoints).reduce(
//   (mediaQuery, breakpoint) => {
//     mediaQuery[breakpoint] = (...args) => css`
//       @media screen and (max-width: ${breakpoints[breakpoint] - 1}px) {
//         ${css(...args)}
//       }
//     `
//     return mediaQuery
//   },
//   {}
// )
