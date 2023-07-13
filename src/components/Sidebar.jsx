import style from './Sidebar.module.css'

export function Sidebar () {
    return (
        <aside className={style.sidebar}>
            <img src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
            alt="" 
            className={style.cover} />

            <div className={style.profile}>
                <strong>Hugo Souza</strong>
                <span>React Developer</span>
            </div>

            <footer>
                <a href="#">Editar seu perfil</a>
            </footer>
        </aside>
        
    )
}