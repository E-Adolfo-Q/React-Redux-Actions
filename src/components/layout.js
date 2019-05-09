import React,{Fragment} from 'react';

const layout = (props) => {
 const { children } = props;
 return(
    <Fragment>
     <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">Crud</span>
     </nav>
     <div className="container">
       <div className="row p-3">
         <div className="offset-3 col-6">
            {children}
         </div>
       </div>
     </div>
    </Fragment>
 );   
};

export default layout;