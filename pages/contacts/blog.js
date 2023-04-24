function Blog({ data }) {

    return (
        <div>
            <h1> Contacts </h1>
            <h2>
                Email - nextstepbeyond@yahoo.com <br />
                Phone number - +421 123 451 4532 <br />
                Address - Washignnton D.C, Bakres street <br/>
            </h2>

            <p>
                Aenean id metus id velit ullamcorper pulvinar. Aliquam id dolor. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Integer imperdiet lectus quis justo. Nullam eget nisl. Nulla non lectus sed nisl molestie malesuada. Nunc tincidunt ante vitae massa. Maecenas lorem. Donec iaculis gravida nulla. Aliquam erat volutpat. Curabitur bibendum justo non orci. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>

        </div>
    )

}

export default Blog

export async function getServerSideProps(){
    console.log("serber side console log, bzzzzzzzzzzzzzzzzzzz")
    return{props: { data }}
}




