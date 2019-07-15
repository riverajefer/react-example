import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

class PhotoUser extends Component {
  constructor(props){
    super(props);
    console.log('UserId: ', props.userId);
  }

  state = {
    thumbail: ''
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos/${this.props.userId}`)
    .then((res)=>{
      const image = res.data.thumbnailUrl;
      this.setState({image})
    })
  }


  render(){
    return (
      <ListItemAvatar>
        <Avatar alt="Remy Sharp"  src={this.state.image} width="50"/>
      </ListItemAvatar>
    )
  }
}
PhotoUser.propTypes = {
}

export default PhotoUser;