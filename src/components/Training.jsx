import './Training.css';
import Moon from '../assets/moon.jpg'
import Pod from '../assets/pod.jpg'
import { Link } from 'react-router-dom';

const Training = () => {
  return (
    <div className='training'>
      <div className='left'>
        <h1>Training</h1>
        <p>Through training is a neccesity when travelling to space. we offer all inclusive training for Pre-Flight and In-Flight scenarios.</p>
        <Link to='/contact'><button className='btn'>Contact</button></Link>
      </div>
      <div className='right'>
        <div className='img-container'>
            <div className='img-stack top'>
                <img src={Moon} className='img' alt='moon img' />
            </div> 
            <div className='img-stack bottom'>
                <img src={Pod} className='img' alt='pod img' />
            </div> 
        </div>
      </div>
    </div>
  )
}

export default Training
