import "./App.css"
import Home from "./pages/Home"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SignUpPat from "./components/SignUpPat"
import Staff from "./pages/Staff"
import SignUpDoc from "./components/SignUpDoc"
import Patient from "./pages/Patient"
import PatientCompleteData from "./components/PatientCompleteData"
import EachDoctor from "./pages/EachDoctor"
// import { connect } from "react-redux";
// import {useEffect} from "react"

const App = () => {
   // useEffect(()=>{
   //   if (localStorage.getItem("token"){
   //       props.logWithLs(localStorage.getItem("token"))
   //   })
   // }, [])

   return (
      <BrowserRouter>
         <Header />
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUpPat} />
            <Route exact path="/staff" component={Staff} />
            <Route path='/staff/:id' component={EachDoctor}/>
            <Route path="/editdoc" component={SignUpDoc} />
            <Route path="/patient" component={Patient} />
            <Route path="/patientdata" component={PatientCompleteData} />
         </Switch>
         <Footer />
      </BrowserRouter>
   )
}

export default App
