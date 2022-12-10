import Main from "../cstyled/Main"
function Container(props){
    return (
        <Main >
            <div className='min-heigh'>{props.children}</div>
        </Main>
    )

}

export default Container