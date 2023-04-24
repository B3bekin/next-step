import Link from 'next/link';

function Second() {
    return (
        <div>
            <h2>Insane Gamer </h2>
            <h1>😁</h1>

            <h4>
                <Link href="/">Back to home</Link>
            </h4>

            <div>
                <Link href="/posts/third">Next Please!</Link>
            </div>

            <div>
                <img src='/WHEEEEERE.jpg' height={200} width={200}/>
            </div>
        </div>


    )
}
export default Second