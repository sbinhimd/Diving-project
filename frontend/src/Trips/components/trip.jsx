import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {Image} from 'bootstrap'
import '../trip.css'
export default class courses extends Component {
    render() {
      console.log(this.props.alldate)
// // oneDate
console.log(this.props.oneDate)
var tripFilter = this.props.alldate.filter(ele=>{
var splt = ele.datee.split(' ')
  return splt[0] +  " " + splt[1] + ' ' +splt[2] == this.props.oneDate
})
console.log(tripFilter)
// console.log(this.props.trip)
let Trips = tripFilter.map(item => 
  <section>
    <div className="container py-3" >
      <div className="card" style={{margin:"0 auto",width:"65%", height:"65%"}}>
        <div className="row ">
          <div className="col-md-4">
              <img variant="left" src={item.trip.ImageUrl} class="w-100"/>
            </div>
            <div className="col-md-8 px-3">
              <div className="card-block px-3">
                <h4 className="card-title">{item.trip.TripTitle}</h4>
                <p className="card-text">{item.trip.Description} </p>
                <p className="card-text">{item.trip.Price}</p>
                <NavLink  style={{width:"50%", marginLeft:"70%"}} to={`/trips/${item.trip._id}`}>Book Now</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  ) 
  let Trips2 = this.props.trip.map(item => 
    <section>
      <div className="container py-3" >
        <div className="card" style={{margin:"0 auto",width:"65%", height:"65%"}}>
          <div className="row ">
            <div className="col-md-4">
                <img variant="left" src={item.ImageUrl} class="w-100"/>
              </div>
              <div className="col-md-8 px-3">
                <div className="card-block px-3">
                  <h4 className="card-title">{item.TripTitle}</h4>
                  <p className="card-text">{item.Description} </p>
                  <p className="card-text">{item.Price}</p>
                  <NavLink  style={{width:"50%", marginLeft:"70%"}} to={`/trips/${item._id}`}>Book Now</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    ) 
        return (
            <div style = {{ marginTop:"190px", paddingBottom:"90px"  }}>
        {this.props.filterO ? Trips : Trips2}
            </div>
        )
    }
}