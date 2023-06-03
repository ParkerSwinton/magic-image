import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between p-12'>
      <h1 className='py-6 text-3xl font-extrabold'>Services</h1>
      <div className='space-y-4 border-b border-b-zinc-100/20 pb-4'>
        <p className='text-zinc-400'>
          <span className='pr-1 font-bold text-zinc-50'>Exterior Only: </span>
          Hand wash and dry with a cleaning of all inner windows. Finished with
          protectant for paint, tires and rims.
        </p>
        <p className='text-zinc-400'>
          <span className='pr-1 font-bold text-zinc-50'>Interior Only: </span>
          Deep clean of all surfaces including windows and door jams. Finished
          with protectant for surfaces.
        </p>
        <p className='text-zinc-400'>
          <span className='pr-1 font-bold text-zinc-50'>Premium Detail: </span>
          The best of both worlds.
        </p>
      </div>
      <div className='grid grid-cols-4 grid-rows-4 place-items-center gap-3 pt-4'>
        <span></span>
        <h2 className='font-bold'>sm</h2>
        <h2 className='font-bold'>m</h2>
        <h2 className='font-bold'>lg</h2>

        <h2 className='font-bold'>Exterior</h2>
        <span className='text-zinc-400'>$80</span>
        <span className='text-zinc-400'>$90</span>
        <span className='text-zinc-400'>$100</span>
        <h2 className='font-bold'>Interior</h2>
        <span className='text-zinc-400'>$90</span>
        <span className='text-zinc-400'>$105</span>
        <span className='text-zinc-400'>$120</span>
        <h2 className='font-bold'>Premium</h2>
        <span className='text-zinc-400'>$150</span>
        <span className='text-zinc-400'>$170</span>
        <span className='text-zinc-400'>$190</span>
      </div>
    </main>
  )
}
