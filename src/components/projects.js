import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0};
  }

  toggleCategories(){

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid" style={{height: '700px'}}>
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center / cover'}}>Portfolio Website</CardTitle>
          <CardText>
            The very website you're on.  I learned and had a lot of fun building it from scratch
          </CardText>
          <CardActions border>
            <Button colored href="https://github.com/itsDannyKim/portfolio_website" rel="noopener noreferrer" target="_blank" >GitHub</Button>
          </CardActions>
        </Card>


        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center / cover'}}>ThingsToDo</CardTitle>
          <CardText>
            A web-based app that allows you to organize a to-do list
          </CardText>
          <CardActions border>
            <Button colored href="https://github.com/itsDannyKim/todo_App" rel="noopener noreferrer" target="_blank" >GitHub</Button>
          </CardActions>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center / cover'}}>DannyPhotography</CardTitle>
          <CardText>
            My first HTML project based on a site that generates random photographs
          </CardText>
          <CardActions border>
            <Button href="https://github.com/itsDannyKim/photographySite" rel="noopener noreferrer" target="_blank"  colored>GitHub</Button>
          </CardActions>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid" style={{height: '700px'}}>
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://developer.apple.com/swift/images/swift-og.png) center / cover'}}>MyContacts</CardTitle>
          <CardText>
            A contacts application that allows you to add, delete, organize, and show the location of contacts on your phone
          </CardText>
          <CardActions border>
            <Button href="https://github.com/itsDannyKim/myContactList" rel="noopener noreferrer" target="_blank"  colored>GitHub</Button>
          </CardActions>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://developer.apple.com/swift/images/swift-og.png) center / cover'}}>MyNotes</CardTitle>
          <CardText>
            A notes application that allows you to add, delete, and sort notes based on priority, date, and title
          </CardText>
          <CardActions border>
            <Button colored href="https://github.com/itsDannyKim/MyNotesApp" rel="noopener noreferrer" target="_blank" >GitHub</Button>
          </CardActions>

        </Card>
      </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid" style={{height: '700px'}}>
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '136px', background: 'url(https://img.icons8.com/color/480/000000/java-coffee-cup-logo.png) center / cover', backgroundRepeat: 'no-repeat', backgroundSize: '150px'}}>Flights4U</CardTitle>
          <CardText >
            A flight reservation application where customers could create accounts, search flights, and reserve flights.  There is also an admin login to add, delete, and update flights
          </CardText>
          <CardActions border>
            <Button colored href="https://github.com/itsDannyKim/flightReservation" rel="noopener noreferrer" target="_blank" >GitHub</Button>
          </CardActions>

        </Card>


        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://img.icons8.com/color/480/000000/java-coffee-cup-logo.png) center / cover', backgroundRepeat: 'no-repeat', backgroundSize: '150px'}}>MyContacts</CardTitle>
          <CardText>
            A contacts application that allows you to add, delete, organize, and show the location of contacts on your phone
          </CardText>
          <CardActions border>
            <Button colored href="https://github.com/itsDannyKim/androidContactList" rel="noopener noreferrer" target="_blank" >GitHub</Button>
          </CardActions>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://img.icons8.com/color/480/000000/java-coffee-cup-logo.png) center / cover', backgroundRepeat: 'no-repeat', backgroundSize: '150px'}}>MyMemo</CardTitle>
          <CardText>
            A memo application that allows you to add, delete, and sort memos' based on priority, date, and title
          </CardText>
          <CardActions border>
            <Button href="https://github.com/itsDannyKim/MyMemoList" rel="noopener noreferrer" target="_blank"  colored>GitHub</Button>
          </CardActions>
        </Card>
        </div>
      )
    }

  }



  render() {
    return(
      <div className="category-tabs">
      <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
      <Tab style={{color:'white', fontWeight:'bold'}}>React</Tab>
      <Tab style={{color:'white', fontWeight:'bold'}}>Swift</Tab>
      <Tab style={{color:'white', fontWeight:'bold'}}>Java</Tab>
      </Tabs>


      <Grid>
      <Cell col={12}>
      <div className="content">{this.toggleCategories()}</div>
      </Cell>
      </Grid>

      </div>
    )
  }
}

export default Projects;
