import { Link } from 'react-router-dom';
// this link is used as it does not change page and return value is same page where href does 

import classes from './MainNavigation.module.css';
// this classes is imported. now all header in css will be changed with name classes in Mainnavigation.module.ss
function MainNavigation(){
return(
    <header className={classes.header}>
       
        <div className={classes.logo}>  React Meetup </div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetup</Link>
                </li>
                
                <li>
                    <Link to='/new'>New Meetup</Link>
                </li>

                <li>
                    <Link to='/favorites'>My favorites</Link>
                </li>
            
        
            </ul>
        </nav>
    </header>
);
}
export default MainNavigation;