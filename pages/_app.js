import Link from "next/link"

function App({ Component, pageProps }) {

    return (
        <div>
            <header>
                <list>
                    <Link href="/posts">Wanna see posts?</Link>
                </list>
            </header>

            <div>
                <Component {...pageProps} />
            </div>

            <footer>
                Footer, down here!
            </footer>
        </div>

    )
}

export default App