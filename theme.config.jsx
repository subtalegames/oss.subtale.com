import { useRouter } from 'next/router'
import Footer from 'components/Footer'
import Logo from 'components/Logo'

export default {
    logo: <Logo />,
    project: {
        link: 'https://github.com/subtalegames/oss.subtale.com',
    },
    useNextSeoProps() {
        const { route } = useRouter()
        return {
            titleTemplate: route !== '/' ? '%s - Subtale OSS' : 'Open Source by Subtale',
            description: 'Open source projects maintained by Subtale, an indendepent video game studio working on an unannounced title!',
        }
    },
    footer: {
        text: <Footer />,
    },
    faviconGlyph: '🚀',
    search: {
        component: () => <></>,
    },
    darkMode: false,
    nextThemes: {
        forcedTheme: 'dark',
    },
}
