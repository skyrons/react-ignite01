import style from './Post.module.css'

export function Post () {
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img 
                        src="https://avatars.githubusercontent.com/u/104842709?v=4" 
                        className={style.avatar} 
                    />
                    <div className={style.authorInfo}>
                        <strong>Lucas Carvalho</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='Publicado em 13 de Maio de 2023 às 08:11' dateTime='2023-07-13 08:11:51'>
                    Públicado há 1h
                </time>
            </header>
            
            <div className={style.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p>👉 <a href="#">jane.design/doctorcare</a></p>

            <p> 
                <a href="#">#novoprojeto</a>{' '}
                <a href="#">#nlw</a>{' '} 
                <a href="#">#rocketseat</a>{' '}
            </p>
            </div>
        </article>
    )
}