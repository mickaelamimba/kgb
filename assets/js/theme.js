const theme = {
    breakpoints: ['40em', '48em', '64em','80em'],
    space: [
        0,
        4,
        8,
        16,
        32,
        64,
        128,
        256,
        512
    ],
    fonts: {
        body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        monospace: '"Roboto Condensed", sans-serif'
    },
    fontSizes: [
        12,
        14,
        16,
        20,
        24,
        32,
        48,
        64,
        96
    ],
    fontWeights: {
        body: 400,
        heading: 600,
        bold: 700
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125
    },
    colors: {
        grayDark: "#2d3748",
        text: "#2d3748",
        background: "#fff",
        primary: "#2b6cb0",
        primaryHover: "#2c5282",
        secondary: "#718096",
        muted: "#e2e8f0",
        success: "#9ae6b4",
        info: "#63b3ed",
        warning: "#faf089",
        danger: "#feb2b2",
        light: "#f7fafc",
        dark: "#2d3748",
        textMuted: "#718096"
    },
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body'
        },
        h1: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 5
        },
        h2: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 4
        },
        h3: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 3
        },
        h4: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 2
        },
        h5: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 1
        },
        h6: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 0
        },
        p: {
            color: 'text',
            fontFamily: 'body',
            fontWeight: 'body',
            lineHeight: 'body'
        },
        a: {
            color: 'primary'
        },
        pre: {
            fontFamily: 'monospace',
            overflowX: 'auto',
            code: {
                color: 'inherit'
            }
        },
        code: {
            fontFamily: 'monospace',
            fontSize: 'inherit'
        },
        table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0
        },
        th: {
            textAlign: 'left',
            borderBottomStyle: 'solid'
        },
        td: {
            textAlign: 'left',
            borderBottomStyle: 'solid'
        },
        img: {
            maxWidth: '100%'
        }
    },
    cards:{
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
        preparation:{
            boxShadow: '0 0 8px rgba(245,248,4,0.38)',

        },
        progress:{
            boxShadow: '0 0 8px rgba(248,130,4,0.27)',
        },
        finished:{
            boxShadow: '0 0 8px rgba(106,248,4,0.27)',
        },
        failure:{
            boxShadow: '0 0 8px rgba(248,4,4,0.27)',
        }

    },

    buttons: {
        primary: {
            fontWeight: 'bold',
            color: 'white',
            bg: 'primary',
            '&:hover': {
                bg: 'rgba(27,48,58,0.49)',
            },
        },
        simple:{
            py: 2,
            px: 3,
            cursor: "pointer",
            fontSize: "100%",
            lineHeight: "inherit",
            backgroundColor: "primary",
            border: "none",
            color: "white",
            fontWeight: "bold",
            borderRadius: "default",
            "&:hover": {
                backgroundColor: "primaryHover"
            },
        }
    },

    forms:{
        label: {
            fontSize: 1,
            fontWeight: 'bold',
        },
        input: {
            borderColor: 'gray',
            '&:focus': {
                borderColor: 'primary',
                boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
                outline: 'none',
            },
        },
        select: {
            borderColor: 'gray',
            '&:focus': {
                borderColor: 'primary',
                boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
                outline: 'none',
            },
        },
        textarea: {
            borderColor: 'gray',
            '&:focus': {
                borderColor: 'primary',
                boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
                outline: 'none',
            },
        },
        slider: {
            bg: 'muted',
        },
    }
}

export default theme
