import React, {Component} from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import axios from 'axios';

class SimpleDialog extends Component {
  constructor(props){
    super(props);
    const { onClose, ...other } = props;
    this.handleClose = this.handleClose.bind(this);
  }

  state = {
    person: [],
  }
  
  componentDidMount() {
    console.log('userId_Person2222: ', this.props.userId);
    console.log('userId: ', this.props.userId);
    
    axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then((res)=>{
      console.log(res.data);
      
      const person = res.data;
      this.setState({person});
    })
  }  
  
  handleClose() {
    this.props.onClose();
  }

  render(){
    console.log('userId_Person: ', this.props.userId);
    return (
    <Dialog open={this.props.open} onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...this.other}>
      <DialogTitle id="simple-dialog-title">
        Detalles User
      </DialogTitle>
    </Dialog>
    )
  }
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
}


export default SimpleDialog;