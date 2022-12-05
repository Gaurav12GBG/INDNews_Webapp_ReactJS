import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 10;
  apiKey = "c15fb2e1a8134baeaead6afe8fe79fd8"

  state = {
    progress: 0
  }

  setProgress = (progress) =>{
    this.setState({
      progress: progress,
    })
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />

          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
          />
          <Routes>
            <Route exact  path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="general"  pageSize={this.pageSize} country="in" category="general" heading="General" />}></Route>
            <Route exact  path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business"  pageSize={this.pageSize} country="in" category="business" heading="Business"/>}></Route>
            <Route exact  path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" heading="Entertainment" />}></Route>
            <Route exact  path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={this.pageSize}  country="in" category="health" heading="Health"/>}></Route>
            <Route exact  path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={this.pageSize} country="in" category="science" heading="Science"/>}></Route>
            <Route exact  path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.pageSize} country="in" category="sports" heading="Sports"/>}></Route>
            <Route exact  path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={this.pageSize} country="in" category="technology" heading="Technology"/>}></Route>
          </Routes>
        </Router>
        <Footer/>
      </>
    );
  }
}
