/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react';
import style from './COmment.module.css';
import { Avatar } from './Avatar';

export function Comment ({ content, onDeleteComment }){

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    return (
        <div className={style.comment}>
            <Avatar      
                hasBorder={false}               
                src="https://avatars.githubusercontent.com/u/57599226?v=4" 
            />
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Hugo Souza</strong>
                            <time 
                                title='Há cerca de uma hora' 
                                dateTime='2023-07-13 08:11:51'>Há cerca de uma hora</time>
                        </div>
                        <button>
                            <Trash 
                                onClick={handleDeleteComment} 
                                size={20} 
                            />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}