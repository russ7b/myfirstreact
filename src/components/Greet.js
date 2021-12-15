const Greet = (props) =>{
    return (
        <div>
            <h1> Welcome {props.fname}{props.lname} </h1>
            {props.children}
        </div>
    )
}

export default Greet