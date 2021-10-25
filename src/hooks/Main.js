import React from "react";
import {Link} from 'react-router-dom'

const Main = () => {
  return (
    <div >
      <Link to="/useState" style={{marginRight: '10px'}}>useState</Link>
      <Link to="/reducer" style={{marginRight: '10px'}}>ReducerTutorial</Link>
    </div>
  );
};

export default Main;
