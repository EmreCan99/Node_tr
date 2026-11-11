export default function Landing(props) {

    console.log("props is: ", props)

    return (
        <main className='page'>
            <section className='card'>
                <h1>Turkish Dictionary</h1>
                <p>The backend is {props.status}</p>

                <form className="form-search">
                    <input className="input-search-text" type="text" name="search-query" />
                    <button className="btn-search" >Search</button>
                </form>

        </section>
      </main>
    )
}