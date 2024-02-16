/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        iconColor: '#FFCC7E',
        themeWhite: '#FFFFFF',
        themeBlack: '#000000',
        bgBlack: '#212121',
        themeGray: '#D9D9D9',
        darkThemeOrange: '#CC8E51',
        darkFontOrange:'#BA7409',
        AddToCart:'#E09C59',
        footerGray:'#EAEAEA'

      },
      fontFamily: {
        themeFont: 'Montserrat'
      },
      fontSize: {
        '2xs': '0.4375rem', // 7px
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '4rem' // 64px
      },
      width: {
        singleProductWidth: '22.8125rem', //  365px
        doubleProductWidth: '11.0625rem', //  177px

        largeProductWidth: '22.25rem' //  356px
      },
      height: {
        singleProductHeight: '31.0625rem', //  497px
        doubleProductHeight: '15.0625rem', //  241px
        largeProductHeight: '29.0625rem' //  465px
      }
    }
  },
  plugins: []
};
