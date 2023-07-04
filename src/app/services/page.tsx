export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between p-12'>
      <h1 className='py-6 text-3xl font-extrabold'>Services</h1>
      <div className='flex max-w-md  flex-col space-y-6 divide-y divide-zinc-100/20'>
        <div className='space-y-4'>
          <p className='text-zinc-400'>
            <span className='pr-1 font-bold text-zinc-50'>Exterior Only: </span>
            Hand wash and dry with a cleaning of all inner windows. Finished with protectant for paint, tires and rims.
          </p>
          <p className='text-zinc-400'>
            <span className='pr-1 font-bold text-zinc-50'>Interior Only: </span>
            Deep clean of all surfaces including windows and door jams. Finished with protectant for surfaces.
          </p>
          <p className='text-zinc-400'>
            <span className='pr-1 font-bold text-zinc-50'>Premium Detail: </span>
            The best of both worlds.
          </p>
        </div>
        <div className='grid grid-cols-4 grid-rows-4 place-items-center gap-3 pt-6'>
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
        <div className='space-y-4 pt-6'>
          <ul className='text-center font-bold'>
            Small Vehicles:
            <li className='font-normal text-zinc-400'>2 / 4 door Sedans</li>
          </ul>
          <ul className='text-center font-bold'>
            Medium Vehicles:
            <li className='font-normal text-zinc-400'>Mid-size Trucks</li>
            <li className='font-normal text-zinc-400'>SUVs</li>
          </ul>
          <ul className='text-center font-bold'>
            Large Vehicles:
            <li className='font-normal text-zinc-400'>Full-size Trucks</li>
            <li className='font-normal text-zinc-400'>Minivans</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
