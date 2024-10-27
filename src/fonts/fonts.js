import { Ubuntu, Manrope } from "next/font/google";

export const manrope = Manrope({
    subsets: ['latin', 'cyrillic'],
    weight: ['300', '400', '500', '600'],
    display: 'swap'
  })

export const ubuntu = Ubuntu({
    subsets: ['latin', 'cyrillic'],
    weight: ['500'],
    display: 'swap'
})