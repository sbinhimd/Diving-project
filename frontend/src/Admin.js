import React, { Component } from 'react'

export default class Admin extends Component {
    render() {
        return (
            <div style={{marginTop:"200px", position:"fixed"}}>
           Sitting Trips : <a href="/api/trip"><button> Trips </button>  </a> 
           <br/>
           Sitting Courses : <a href="/api/corsess"><button> Courses </button>  </a> 
            </div>
        )
    }
}
