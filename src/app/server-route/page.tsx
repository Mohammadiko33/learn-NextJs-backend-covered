import { serverSide } from "@/Components/utils/server"
import ImageSlider from "@/Components/ImageSlider"

const SeverRoute = () => {
  const res = serverSide()
  return (
    <div className="fullcenter">SeverRoute , {res}
      <ImageSlider/>
    </div>
  )
}

export default SeverRoute