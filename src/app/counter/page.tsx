import CounterLogic from "@/Components/counterLogic"

export const metadata : {title: string} = {
    title: "Counter page"
}

const Counter = () => {
  return (
    <div className="rsc"><span>Counter :</span><CounterLogic/></div>
  )
}

export default Counter