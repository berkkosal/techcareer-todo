import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

 class Footer extends Component {



    constructor(props) {
        super(props);

        
        this.state = {}

       
    } 

  render() {
    return (
      <>
        FOOTER
      </>
    )
  }
}
export default withTranslation()(Footer);