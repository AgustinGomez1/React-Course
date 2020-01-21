import React from "react";
import confLogo from "../images/badge-header.png";
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className='Badge'>
        <div className='Badge__header'>
          <img src={confLogo} alt='Logo de la conferencia'></img>
        </div>

        <div className='Badge__section-name'>
          <img
            className='Badge__avatar'
            src={this.props.avatarURL}
            alt='Avatar'
          ></img>
          <h1>
            {this.props.firsName} <br />
            {this.props.lastName}
          </h1>
        </div>

        <div className='Badge__section-info'>
          <p>{this.props.jobTitle}</p>
          <div>@{this.props.twitter}</div>
        </div>

        <div className='Badge__footer'>#platziconf</div>
      </div>
    );
  }
}

export default Badge;
