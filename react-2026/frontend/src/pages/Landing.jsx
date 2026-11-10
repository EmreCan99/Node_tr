export default function Landing(props) {

    console.log("props is: ", props)

    return (
        <main className='page'>
            <section className='card'>
                <h1>This is the first title</h1>
                <p>The backend is {props.status}</p>

                <form>
                    <input className="input-box" type="text" name="data" />
                </form>

        </section>
      </main>
    )
}