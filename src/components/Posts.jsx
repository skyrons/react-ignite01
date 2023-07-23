/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

import { Avatar } from './Avatar'
import { Comment } from './Comment'


import style from './Post.module.css'

// eslint-disable-next-line react/prop-types
export function Post ({ author, publishedAt, content }) {

    const [comments, setComments] = useState ([])

    const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'as' HH:mm 'h'",{
        locale:ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix:true,
    })

    function handleCreateNewComment() {
        event.preventDefault()
        
        setComments([...comments, comments.length + 1]);
    }
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar
                        src={author.avatarUrl}
                    />
                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            
            <div className={style.content}>
                {content.map( line=> {
                    if(line.type == 'paragraph'){
                        return (
                            <p>{line.content}</p>
                        )
                    }else if(line.type == 'link'){
                        return (
                            <p><a href="#">{line.content}</a></p>
                        )
                     }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className= {style.commentForm}>

                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Escreva um comentário...'></textarea>

                <footer>
                    <button type="submit">
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={style.commentList}>
                {comments.map(() =>{
                    return <Comment />
                    
                })
                }
            </div>
        </article>
    )
}