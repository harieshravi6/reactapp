import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout';

const layout = (props) => (

<Aux>
    <div>Toolbar, sideDrawer, Backdrop</div>
    <main cassName={classes.content} >
        {props.children}
    </main>
</ Aux>

);  

export default layout;