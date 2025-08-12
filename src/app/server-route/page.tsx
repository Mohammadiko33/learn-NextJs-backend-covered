import { serverSide } from "@/Components/utils/server"

const SeverRoute = () => {
  const res = serverSide()
  return (
    <div>SeverRoute , {res}</div>
  )
}

export default SeverRoute