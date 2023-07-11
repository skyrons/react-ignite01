export function Post (props){
    console.log(props)
    return(
       <div>
        <h1>{props.produto}</h1>
        <p>{props.content}</p>
       </div>
    )
}