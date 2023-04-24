import Link from 'next/link';
// import YungKocke from "/next-step/public/WHEEEEERE.jpg"

function PostMainPage() {
    return (
        <div>
            <div>
                <h1>The Posts menu</h1>
            </div>
            <h2>Welcome!</h2>

            <Link href="/">Back to home</Link>

            <p>Or go to other posts:</p>

            <list>

                <Link href="/posts/first">1</Link>
                <Link href="/posts/second">2</Link>
                <Link href="/posts/third">3</Link>

            </list>

            <div>
                <img src='/next-step/public/WHEEEEERE.jpg' height={200} width={200}/>
            </div>
        </div>
    )
}

export default PostMainPage