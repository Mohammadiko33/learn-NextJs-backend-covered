"use client"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ClientRoute = () => {
  const settings = {
    dots: true,
  }
  return (
    <div className="pt-96 my-0 mx-auto w-[400px]">
        <Slider {...settings}>
            <div className="w-24 h-24"><img className="w-full object-cover" src="/ReadMe-images/CSR.png" alt="CSR" /></div>
            <div className="w-24 h-24"><img className="w-full object-cover" src="/ReadMe-images/SSR.png" alt="SSR" /></div>
            <div className="w-24 h-24"><img className="w-full object-cover" src="/ReadMe-images/ComponentHierarchy.png" alt="ComponentHierarchy" /></div>
            <div className="w-24 h-24"><img className="w-full object-cover" src="/ReadMe-images/RSC-loading-sequence.png" alt="RSC-loading-sequence" /></div>
            <div className="w-24 h-24"><img className="w-full object-cover" src="/ReadMe-images/RSC-Update-Sequence.png" alt="RSC-Update-Sequence" /></div>
        </Slider>
    </div>
  )
}

export default ClientRoute;