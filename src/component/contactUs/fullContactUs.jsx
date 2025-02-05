import React,{useState,useEffect} from 'react'
import MainNavbar from '../Navbar/MainNavbar'
import ContactUs from './ContactUs'
import { ProgressBar } from  'react-loader-spinner'


const FullContactUs = () => {
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  return (
    <div>
      {loading? (<div className="loader">
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor = '#FFA217'
            barColor = '#CCA15F'
          />
        </div>): (<>
    <MainNavbar/>
    <ContactUs/>
    </>)}
    </div>
  )
}

export default FullContactUs