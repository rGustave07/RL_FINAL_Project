import React from "react";
import "./Items.css";
import { Content, Button, Card, CardTitle, CardText, CardMenu, CardActions, IconButton } from 'react-mdl';
import ContainerCard from "../ContainerCard";
import API from "../../utils/API";
import Buttons from "../Buttons";


const genCard = (title, imgEnd) => (
  <Card key={title} shadow={0} style={{ width: '512px', margin: 'auto' }}>
    <CardTitle> {title}</CardTitle>
    <img src={`/images/items/${imgEnd}`} />
    <CardActions border>
      <Button colored>Save</Button>
    </CardActions>
    <CardMenu style={{ color: '#fff' }}>
      <IconButton name="share" />
    </CardMenu>
  </Card>
);

const nameToEnd = name => (name.replace(" ", "_") + ".png");
let dataArr = [];

class Items extends React.Component {
  state = {
    name: "",
    items: [

    ]
  }

  handleText = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit(e) {
      e.preventDefault();
      API.searchName(this.state.name)
         .then( res => {
           this.setState({ items: res.data });
         })
         .catch(err => {
            console.log(err);
         });
  }

  handleSubmitCategory(e) {
      e.preventDefault();
      API.searchCategory(this.state.name)
         .then( res => {
            this.setState({items: res.data})
         })
         .catch( err => {
            console.log(err);
         });
  }

  render() {
    return <div>
      <a name="top"></a>
      <div className="android-be-together-section mdl-typography--text-center">

        <ContainerCard title="Stats Search">
          <div className="flex">
            <form action="#">
              <Buttons></Buttons>
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="text" id="sample3" onChange={this.handleText} value={this.state.name} />
                <label className="mdl-textfield__label" htmlFor="sample3">Enter Name</label>
              </div>
            </form>
            <Button disabled={!!!this.state.name} onClick={this.handleSubmit.bind(this)} ripple={true}> Submit </Button>
            { this.state.items.length !== 0 && this.state.items.map(item => genCard(item.itemName, nameToEnd(item.itemName))) }
          </div>
          {/* genCard(e, nameToEnd(e)) */}
        </ContainerCard>
      </div>
    </div>
  }
}

export default Items;
