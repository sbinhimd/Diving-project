
import React, { Component } from 'react'
import '../trip.css'
import {Button} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
export default class showCourse extends Component {

  state = {
    data: this.props.trip
  }
  handleFaveToggle =(select) =>{
    var temp = []
    temp = this.props.addtocart
    temp.push(select)
      this.setState({
        addtocart : temp,
        select : select
       }) 
  }


  render() {

    return (
      <>
      <div style={{ paddingTop: "45px", paddingBottom: "90px" }}>
        <div class="container">
          <img src={this.state.data.ImageUrl} alt ="d" className='showImage'/>
          <div class="text-block">
            <h1>{this.state.data.TripTitle}</h1>
          </div>
        </div>
        <div style={{ width: "50%", marginLeft: "180px" }} >
          
          <h2>Price : </h2>{this.state.data.Price}
          <h2>Date : </h2>{this.state.data.Date}
          <h2>Start Time : </h2>{this.state.data.StartTime}
          <h2>End Time : </h2>{this.state.data.EndTime}
          <h2>DeparturePoint : </h2>{this.state.data.DeparturePoint}
          <h2>Overview : </h2>{this.state.data.Description}
        </div>
        <Button href="/cart" style={{marginLeft:"400px"}} primary onClick = {() => {this.props.handleFaveToggle(this.props.trip) } } > Book Now </Button>
</div>
        </>
          )
        }
      }
