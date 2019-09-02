import React from 'react';
import circuitImage from '../circuit.jpg';
import aiImage from '../ai.jpg';
import resume from '../resume.pdf';
import resumePreview from '../resumePreview.png'
import axios from 'axios';
import projects from '../projectData.js'

class Home extends React.Component{
  state = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    email_confirmation: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/contact/send', {
      ...this.state
    })
    .then(res => {
      document.getElementById("contact-form").reset();
      this.setState({
        ...this.state,
        email_confirmation: res.data
      });
      setTimeout(() => {
        this.setState({
          ...this.state,
          email_confirmation: ''
        })
      }, 3000);
    })
    .catch(err => {
      console.log('error', err);
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render(){
    let projectCards = projects ? (
      projects.map(project => {
        return(
          <div className="col s12 m6 l4 container" key={project.id}>
            <div className="card grey darken-4">
              <div className="card-image">
                <img src={project.image} alt={project.title} style={{height: '150px'}}/>
              </div>
              <div className="card-content grey-text text-lighten-4">
                <span className="card-title">{project.title}</span>
                <textarea className="grey-text text-lighten-4" style={{height: '100px', resize: 'none'}} value={project.description} readOnly></textarea>
              </div>
              <div className="card-action">
                <div className="row">
                  <div className="col s6 m6 container">
                    <a className="btn-floating btn-large waves-effect waves-light pulse grey darken-2" href={project.url} target="_blank">
                      <i className="material-icons">web</i>
                    </a>
                  </div>
                  <div className="col s6 m6 container">
                    <a className="btn-floating btn-large waves-effect waves-light pulse grey darken-2" href={project.github} target="_blank">
                      <i className="fab fa-github-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <div className="container">
        <h2>Loading...</h2>
      </div>
    )
    return (
      <div className="Home">
        <div className="parallax-container">
          <div className="parallax">
            <img src={circuitImage} alt="Parallax Image 1" style={{width: '100%'}}/>
          </div>
        </div>
        <div className="section white">
          <div className="row">
            <h2 className="header">Projects</h2>
            {projectCards}
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src={aiImage} alt="Parallax Image 2" style={{width: '100%'}} />
          </div>
        </div>
        <div className="section white">
          <div className="row">
            <div className="col s12 m4">
              <h2 className="header">Resume</h2>
              <a href={resume} target="_blank">
                <img src={resumePreview} alt="resume.pdf" style={{width: '200px'}}/>
              </a>
              <div className="container">
                <a href={resume} target="_blank" className="btn-large waves-effect waves-light pulse grey darken-4">Click to Enlarge</a>
              </div>
            </div>
            <div className="col s12 m8">
              <h2 className="header" id="contact-section">Contact</h2>
              <div className="row">
                <form id="contact-form" className="col s12">
                  <div className="row">
                    <div className="input-field col s6">
                      <i className="material-icons prefix">account_circle</i>
                      <input type="text" id="firstName" className="validate" onChange={this.handleChange}/>
                      <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field col s6">
                      <i className="material-icons prefix">account_circle</i>
                      <input type="text" id="lastName" className="validate" onChange={this.handleChange}/>
                      <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="input-field col s12">
                      <i className="material-icons prefix">contact_mail</i>
                      <input type="email" id="email" className="validate" onChange={this.handleChange}/>
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                      <i className="material-icons prefix">message</i>
                      <textarea id="message" className="materialize-textarea" onChange={this.handleChange}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                    <button className="btn waves-effect waves-light grey darken-4" type="submit" onClick={this.handleSubmit}>Submit
                      <i className="material-icons right">send</i>
                    </button>
                    <div id="email_confirmation">{this.state.email_confirmation}</div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;