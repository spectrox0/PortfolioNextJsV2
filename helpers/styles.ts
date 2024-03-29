export const primaryColor = '#afbda1'
export const grayColor = '#bdbdbd'

enum fontWeight {
  A=100,
  B= 200,
  C= 300,
  D= 400,
  E = 500,
  F = 600 ,
  G=700
}
export const stylesTitle = "" +
    ""
interface size {
    mobileS: string,
    mobileM: string,
    mobileL: string,
    tablet: string,
    laptop: string,
    laptopL: string,
    desktop: string,
}

const sizes: size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
}

export const device: size = {
    mobileS: `(max-width: ${sizes.mobileS})`,
    mobileM: `(max-width: ${sizes.mobileM})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptop: `(max-width: ${sizes.laptop})`,
    laptopL: `(max-width: ${sizes.laptopL})`,
    desktop: `(max-width: ${sizes.desktop})`,
}
