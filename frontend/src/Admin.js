import React, { Component } from 'react'

export default class Admin extends Component {
    render() {
        return (
            <div style={{marginTop:"200px"}}>
           Sitting Trips :<a href="http://localhost:5000/trip"><button> Trips </button>  </a> 
           <br/>
           Sitting Courses :<a href="http://localhost:5000/corsess"><button> Courses </button>  </a> 
            </div>
        )
    }
}
