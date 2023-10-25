//import React, { Component } from 'react'
import './HeroImage.css'



const HeroImage = ({heading, text}) => {
  return (
    <div className='hero-img'>
        <div className='heading'>
            <h1>{heading}</h1>
             <p>{text}</p>
         </div>
         </div>
  )
}

export default HeroImage




// export default class HeroImage extends Component {
//   render() {
//     return (
//       <div className='hero-img'>
//         <div className='heading'>
//             <h1>{this.props.heading}</h1>
//             <p>{this.props.text}</p>
//         </div>
//       </div>
//     )
//   }
// }
