import './Page404.scss'

export const Page404 = () => {
    return (
        <div className='divPage404'>
            <aside className='aside404'><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png" alt="404" />
            </aside>
            <main className='main404'>
                <h1>Sorry!</h1>
                <p>
                    Either you aren't cool enough to visit this page or it doesn't exist <em>. . . like your social life.</em>
                </p>
                <button><a href="/">You can go now!</a></button>
                
            </main>
        </div>
    )
}