import React, {Component} from 'react';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import PhotoUser from '../PhotoUser/PhotoUser';
import SimpleDialog from '../SimpleDialog/SimpleDialog';

class PersonList extends Component {

  state = {
    persons: [],
    open: false,
    userId: 0
  }
  
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      console.log(res.data);
      
      const persons = res.data;
      this.setState({persons});
    })
  }

  handleListItemClick(event, index) {
    console.log('idex: ', index);
    this.setState({open:true, userId: index});
  }

  render() {

    const handleClose = () => {
      this.setState({open: false});  
    };    

    return (
      <Box width="60%">
        <List component="nav" aria-label="Main mailbox folders">
          {
            this.state.persons.map(person => 
            <ListItem key={person.id} 
              button
              onClick={event=> this.handleListItemClick(event, person.id)}
              >
              <PhotoUser userId={person.id} />
              <ListItemText primary={person.name}  key={person.id} 
              secondary= {
                <React.Fragment>
                  <Typography 
                  component="span"
                  variant="body2"
                  className="inline"
                  color="textPrimary"
                  >
                  Ali Connors
                  </Typography>
                  {person.company.bs}
                </React.Fragment>
              }
              />  
              <Divider variant="inset" component="li"></Divider>
            </ListItem>)
          }
        </List> 
        <SimpleDialog open={this.state.open} userId={this.state.open? this.state.userId: null} onClose={handleClose} /> 
      </Box>
    );
  }
}

export default PersonList;