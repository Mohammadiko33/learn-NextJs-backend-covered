import Link from 'next/link'

const NotFounded = () => {

  return (
    <div className='fullCCenter capitalize'>
        there is not found 
        what do you want ...
        <Link href="/" className='text-blue-400 hover:text-blue-500'>Back home</Link>
    </div>
  )
}

export default NotFounded;