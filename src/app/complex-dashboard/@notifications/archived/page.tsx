import Cart from '@/Components/Cart'
import Link from 'next/link'

export const linkSimpleStyle = "px-4 py-2 rounded-md text-lg cursor-pointer duration-100 hover:opacity-80 bg-sky-100 text-sky-500"

const Notifications = () => {
  return (
    <Cart>
      <div className="flex flex-col">
        <p>archived Notifications</p>
        <Link
          href="/complex-dashboard"
          className={`${linkSimpleStyle} bg-sky-100 text-red-500`}
        >
          Default
        </Link>
      </div>
    </Cart>
  )
}

export default Notifications