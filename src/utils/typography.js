import Typography from 'typography'

const headerFontFamily = ['Montserrat', 'Helvetica', 'Arial', 'sans-serif']
const bodyFontFamily = headerFontFamily

const typography = new Typography({
	baseFontSize: '15px',
	baseLineHeight: 1.666,
	bodyFontFamily,
	headerFontFamily,
	headerWeight: 700,
	omitGoogleFonts: true,
	overrideStyles: ({ adjustFontSizeTo, rhythm }) => ({
		h1: {
			...adjustFontSizeTo('44px'),
		},
		h2: {
			...adjustFontSizeTo('36px'),
		},
		h3: {
			...adjustFontSizeTo('36px'),
			fontWeight: 200,
		},
		p: {
			lineHeight: rhythm(1.2),
		},
	}),
})

export default typography
