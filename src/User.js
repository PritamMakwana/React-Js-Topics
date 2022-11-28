export default function User(props){
    return(
        <div style={{backgroundColor : "skyblue"}}>
            <h3>User Info</h3>
            <h6>Hello : {props.name}</h6>
            <h6>Email : {props.email}</h6>
            <h6>Address: {props.other.address}</h6>
            <h6>mob: {props.other.mob}</h6>
        </div>
    )
}