import React from "react";
import "./Items.css";
import { Button, Card, CardTitle, CardMenu, CardActions, IconButton } from 'react-mdl';
import ContainerCard from "../ContainerCard";
import API from "../../utils/API";

const genCard = (title, imgEnd) => (
  <Card key={title} shadow={0} style={{ width: '240', height: '200', margin: 'auto auto 15px auto', alignItems:'center' }}>
    <CardTitle> {title}</CardTitle>
    <img src={`/images/items/${imgEnd}`} alt="" style={{width:'220px', height:'220px', objectFit: 'cover'}}/>
    <CardActions border>
      <Button colored>Save</Button>
    </CardActions>
    <CardMenu style={{ color: '#fff' }}>
      <IconButton name="share" />
    </CardMenu>
  </Card>
);

const nameToEnd = name => (name.replace(" ", "_") + ".png");
let categories = ["Wheels", "Bodies", "Antennas", "Banners", "Boosts", "Decals", "Explosions", "Paints", "Toppers", "Trails"];

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
      // e.preventDefault();
      console.log("ran");
      API.searchName(this.state.name)
         .then( res => {
           this.setState({ items: res.data });
         })
         .catch(err => {
            console.log(err);
         });
  }

  handleSubmitCategory(e) {
      // e.preventDefault();
      console.log("ran");
      API.searchCategory(this.state.name)
         .then( res => {
            this.setState({items: res.data})
         })
         .catch( err => {
            console.log(err);
         });
  }

  handler (){
    if (categories.includes(this.state.name)) {
        this.handleSubmitCategory();
        console.log("Here1");
    } else {
        this.handleSubmit();
        console.log("Here2");
    }
  }

  render() {
    return <div>
      <a name="top"></a>
      <div className="android-be-together-section mdl-typography--text-center">

        <ContainerCard title="Items Search">
          <div className="flex search-bar">
            <form action="#">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="text" id="sample3" onChange={this.handleText} value={this.state.name} />
                <label className="mdl-textfield__label" htmlFor="sample3">Enter Name</label>
              </div>
            </form>
            <Button disabled={!!!this.state.name} onClick={this.handler.bind(this)} ripple={true}> Submit </Button>
          </div>
            { this.state.items.length !== 0 && this.state.items.map(item => genCard(item.itemName, nameToEnd(item.itemName))) }
          {/* genCard(e, nameToEnd(e)) */}
        </ContainerCard>
      </div>
    </div>
  }
}

export default Items;
