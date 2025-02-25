import './video.scss'
import img1 from '../../../shared/images/image.png'
import img2 from '../../../shared/images/Frame.png'

  

export  const Video = () => {
    return (
        <div className='zaly-cont'>

        <div className='zaly'>   
            <h1 className='zaly-text1'>Читательные залы</h1>
            <img className='zaly-img2' src={img2} alt="" />
            <img className='zaly-img' src={img1} alt="" />
        </div>
    </div>
    );
}

