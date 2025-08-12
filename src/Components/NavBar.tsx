import NavSearch from "./NavSearch"
import NavLinks from "./NavLinks"

export default function NavBar() {
    console.log("navBar rendering")
  return (
    <div>
        <NavSearch/>
        <NavLinks/>
    </div>
  )
}
