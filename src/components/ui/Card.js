import classes from './Card.module.css'

function Card(props){
return(
<div className={classes.Card}>
    {props.children}
</div>

// props.children is a specail props which every component recieve by default for example this Card.js is in
// meetupItem by importing and they have been surrounded by <card></card> so props.children is used
);
}
export default Card;