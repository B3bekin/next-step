import Link from 'next/link';

function First() {
    return (
        <div>
            <h3>Casual Gamer </h3>
            <h1>🤓</h1>

            <h4>
                <Link href="/">Back to home</Link>
            </h4>

            <Link href="/posts/second">Next Please!</Link>

            <div>
                <img src='/WHEEEEERE.jpg' height={100} width={100}/>
            </div>
        </div>
    )
}

export default First