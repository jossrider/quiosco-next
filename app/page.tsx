import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className='flex flex-col items-center mt-10 '>
      <Link
        href={'/admin/products'}
        className='bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer'>
        Coffe Fresh
      </Link>
    </div>
    </>
  )
}
