import type { Config } from 'tailwindcss';

const createPxEntries = (size: number) => {
  return {
    0: '0',
    ...Array.from(Array(size + 1)).reduce((accumulator, _, i) => {
      return { ...accumulator, [`${i}`]: `${i / 16}rem` };
    }),
  };
};

const PX_ENTRIES_10 = createPxEntries(10);
const PX_ENTRIES_100 = createPxEntries(100);
const PX_ENTRIES_1200 = createPxEntries(1200);

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  prefix: '',
  theme: {
    borderWidth: PX_ENTRIES_10,
    fontSize: PX_ENTRIES_100,
    // spacing values are inherited by the 'padding', 'margin', 'height', 'maxHeight', 'flex-basis', 'gap', 'inset', 'space', 'translate', 'scrollMargin', 'scrollPadding', and 'textIndent'.
    spacing: PX_ENTRIES_1200,
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    zIndex: {
      header: '40',
      modal: '9990',
      toast: '9999',
    },
    extend: {
      fontFamily: {
        pretendard: ['Pretendard'],
      },
      colors: {
        transparent: 'transparent',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        informative: {
          DEFAULT: 'var(--informative)',
          foreground: 'var(--informative-foreground)',
        },
        warning: {
          DEFAULT: 'var(--warning)',
          foreground: 'var(--warning-foreground)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            'h2, h3, h4': {
              scrollMarginTop: '5rem',
            },
            p: {
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            '.callout-contents > p': {
              margin: 0,
            },

            code: {
              counterReset: 'line',
            },

            // Inline code only
            ':not(pre) > code': {
              fontWeight: 'inherit',
              position: 'relative',
              bottom: 1,
              margin: '0 3px',
              color: '#eb5757',
              backgroundColor: 'rgba(135,131,120,0.15)',
              fontFamily:
                '"SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace',
              borderRadius: 3,
              padding: '0.2em 0.4em',
              overflowWrap: 'break-word',
            },

            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },

            'code[data-line-numbers] > [data-line]::before': {
              counterIncrement: 'line',
              content: 'counter(line)',

              /* Other styling */
              display: 'inline-block',
              width: '1rem',
              marginRight: '1.4rem',
              textAlign: 'right',
              color: 'lightgrey',
              fontSize: '0.75rem',
            },

            'code[data-line-numbers-max-digits="2"] > [data-line]::before': {
              width: '1rem',
            },

            'code[data-line-numbers-max-digits="3"] > [data-line]::before': {
              width: '2rem',
            },

            pre: {
              paddingRight: 0,
              paddingLeft: 0,
              color: 'var(--shiki-light)',
              backgroundColor: 'var(--shiki-light-bg)',
              border: '1px solid #e5e7eb',
            },

            '.dark pre': {
              backgroundColor: 'var(--shiki-dark-bg)',
              color: 'var(--shiki-dark)',
              border: '1px solid #374151',
            },

            'pre > code > span': {
              paddingLeft: '1.1rem',
              paddingRight: '1rem',
            },

            'pre code span': {
              color: 'var(--shiki-light)',
            },
            '.dark pre code span': {
              color: 'var(--shiki-dark)',
            },

            '[data-highlighted-line]': {
              backgroundColor: 'rgba(253, 224, 71, 0.2)',
            },

            '.project img': {
              marginTop: '0px !important',
            },

            '.project p,ul,li': {
              fontSize: 15,
            },

            u: {
              textUnderlineOffset: '4px',
              textDecorationThickness: 1,
              fontWeight: 600,
            },
          },
        },
      },
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%': {
            transform: 'translateY(-12%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '100%': {
            transform: 'translateY(-12%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
        },
        ping: {
          '50%': {
            transform: 'scale(2)',
            opacity: '0.7',
          },
          '75%': {
            transform: 'scale(2)',
            opacity: '0.5',
          },
          '100%': {
            transform: 'scale(2)',
            opacity: '0.3',
          },
        },
        textLoop: {
          '0%': { '-webkit-transform': 'translate3d(0, 0, 0)', transform: 'translate3d(0, 0, 0)' },
          '100%': {
            '-webkit-transform': 'translate3d(-100%, 0, 0)',
            transform: 'translate3d(-100%, 0, 0)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2.5s linear',
        bounce: 'bounce 1.2s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        textLoop: 'textLoop 10s linear infinite',
      },
      backdropBlur: {
        'custom-blur': '2.5px',
      },
      boxShadow: {
        top: '0 -4px 6px -1px rgba(0, 0, 0, 0.18)',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};

export default config;
