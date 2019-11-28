import React, { Component } from 'react'
import './courses.css'
import { Button } from 'react-bootstrap'
export default class showCourse extends Component {
  state = {
    data: this.props.course
  }
  handleFaveToggle =(select) =>{
    var temp = []
    temp = this.props.addtocart
    temp.push(select)
      this.setState({
        addtocart : temp,
        select : select
       }) }
  render() {
    return (
      <>
      <div style={{ paddingTop: "45px", paddingBottom: "90px" }}>
        <div class="container">
          <img  alt="c" src={this.state.data.ImageUrl} className='showImage' />
          <div class="text-block">
            <h1>{this.state.data.CourseTitle}</h1>
          </div>
        </div>
        <div style={{ width: "50%", marginLeft: "180px" }} >
          <h2 >Description : </h2>{this.state.data.Description}
          <h2>Price : </h2>{this.state.data.Price}
          <h2>Start Date : </h2>{this.state.data.StartDate}
          <h2>End Date : </h2>{this.state.data.EndDate}
        </div>
        <Button href="/cart" primary style={{marginLeft:"400px"}} onClick = {() => {this.props.handleFaveToggle(this.props.course) } } > Book Now </Button>
        </div>     
          </>
          )
        }
      }