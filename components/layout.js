import Head from 'next/head';

import Card from './card';
import Navigation from './navigation';

const Layout = ({ children, title = 'Daniel Horan' }) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700" rel="stylesheet" />
        </Head>
        <Card>
            <Navigation />
            { children }
        </Card>

        <style normalize jsx global>{`
            html {
                line-height: 1.15;
                min-height: 100%;
            }

            body {
                background: #2C3E50;
                background: -webkit-linear-gradient(to right, #FD746C, #2C3E50);
                background: linear-gradient(to bottom, #FD746C, #2C3E50);
                box-sizing: border-box;
                color: #2c3e50;
                font-family: 'Inconsolata', monospace;
                font-size: 1em;
                margin: 0;
                min-height: 100%;
            }

            @media (min-width: 960px) {
                body {
                    padding: 2rem;
                }
            }
        `}</style>
    </div>
)

export default Layout;
