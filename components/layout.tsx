import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'NextCoin' }: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header>
            <h1>Bitcoin Prices with NextJS</h1>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </nav>
        </header>
        {children}
        <footer>
            <p>Footer</p>
        </footer>
    </div>
)

export default Layout