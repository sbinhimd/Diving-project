import React, {Component } from 'react';
 import './homepage.css'
 import {Link} from 'react-router-dom';
 import {Row,Col,Container,Image} from 'react-bootstrap'
 import {Button} from 'semantic-ui-react'
 import 'react-datepicker/dist/react-datepicker.css'
 import DatePicker from 'react-datepicker';
var months = { '01':'Jan'  ,   '02' : 'Feb' , '03':'Mar' , '04': 'Apr' , '05':'May' , '06':'Jun' , '07':'Jul' , '08':'Aug' , '09':'Sep' , '10':'Oct' , '11':'Nov' , '12':'Dec' }
export default class homepage extends Component {
    state = {
        StartDate: new Date(),
        EndDate: new Date(),
      }
    onChange  = (StartDate)=> { this.setState({ StartDate})
  this.props.changetheDateToFilter(this.state.Datee , StartDate.toString().substring(4,15) , true )
  }
    onChange2 = (EndDate)=> { this.setState({ EndDate}) }

    componentDidMount(){
           setTimeout(() => {
            var Datee =   this.props.trip.map(ele=> {
              var splt = ele.Date.split('/')
              // splt[1] splt[0] splt[2]
              return `${months[splt[1]]} ${splt[0]} ${splt[2]} `
            } )
            Datee = this.props.trip.map((ele , i)=> {
                return { trip :ele , datee : Datee[i]}
            })
           this.setState({Datee})
           }, 1000);
          }
    render() {
   console.log(this.state.Datee)
   var str = this.state.StartDate.toString().substring(4,15)
   console.log(str);
        return (
          <div >
            <div className="backGraound">
            <div className="FindBorder">
            --
            </div>
           <div className ="FindTrip">Find Trip
           </div>
          <div className="calnder">
     pick a Date :   <DatePicker
      showPopperArrow={false}
      selected={this.state.StartDate}
      onChange={StartDate => this.onChange(StartDate)} />
  <Link to="/trips" > <Button>Submit</Button></Link>
            </div>
            </div>
        <Container style={{marginRight:"40%",}} >
  <Row>
    <Col style={{marginTop:"60px"}} lg>
 <h1 style={{fontSize:"70px",letterSpacing:"2px"}}>Why Scuba Dive</h1> 
 <p style={{marginTop:"60px ",fontSize:"23px" , fontFamily:"Franklin Gothic Medium" }} >
 Diving offers many possibilities for education. First we have to face fears, learn new skills and later we continue to improve our skills and reach new boundaries. All the while learning about ourselves and a whole new world we barely acknowledged was there before.
 </p>
    </Col>
    <Col lg>
    <div className="sq"> </div>
    </Col> <Row style={{marginTop:"-30px"}}> <Col  lg>
<Image style={{width:"200%", marginLeft:"-320px",marginTop:"30px"}} src="https://belizedivingservices.com/wp-content/uploads/coral-reefs-featured.jpg"  /></Col>
  <Col lg>
    <h1 style={{fontSize:"40px",marginTop:"160px",marginLeft:"45%" }}>IT'S DIFFERENT EVERYWHERE YOU GO, EVERY TIME YOU GO</h1> 
    <div className = 'shopbtn'>
       <Link to="/courses" >  <Button content='Primary' size="md" style = {{fontSize : "20px" , fontFamily: 'Courier New'}}  > JOIN NOW  </Button> </Link>  
</div>
    </Col>
  </Row>
  </Row>
 </Container>
            </div>
        )
    }
}