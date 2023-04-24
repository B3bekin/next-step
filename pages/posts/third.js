import Link from 'next/link';

function Third() {
    return (

        <div>
            <h1>Super Epic Insane Gamer</h1>
            <h1>😎</h1>
            <h4>
                <Link href="/">Back to home</Link>
            </h4>

            <div>
                
                <Link href="/posts/first">Once Again!</Link>
            </div>

            <div>
                <img src='/WHEEEEERE.jpg' height={300} width={300}/>
            </div>
        </div>

    )
}

export default Third