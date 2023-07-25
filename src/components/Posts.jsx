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

    const [comments, setComments] = useState ([
        'FAKE NATTYYYYYYY '
    ])

    const [newCommentText, setNewCommentText] = useState ('')

    const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'as' HH:mm 'h'",{
        locale:ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix:true,
    })

    function handleCreateNewComment() {
        event.preventDefault() 

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChanged() {
        setNewCommentText(event.target.value)
    }

    function deleteComment(comment) {
        console.log(`Delete comment ${comment}`)
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
                            <p key={line.content}>{line.content}</p>
                        )
                    }else if(line.type == 'link'){
                        return (
                            <p key={line.content}><a href="#">{line.content}</a></p>
                        )
                     }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className= {style.commentForm}>

                <strong>Deixe seu feedback</strong>

                <textarea 
                    name='comment'
                    placeholder='Escreva um comentário...'
                    onChange={handleNewCommentChanged}
                    value={newCommentText}
                    />
                    

                <footer>
                    <button type="submit">
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={style.commentList}>
                {comments.map(comment => {
                    return <Comment 
                        onDeleteComment={deleteComment}
                        key={comment}
                        content={comment} />
                })}
            </div>
        </article>
    )
}