import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class Tarjeta extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Tarjeta">
        <Button variant="contained" color="primary">
          TARJETA
        </Button>    
      </div>
    )
  }
}

export default Tarjeta;