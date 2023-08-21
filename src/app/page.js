import Image from 'next/image'

export default function Home() {
  return (
    <main class="row">
      <div className="w-full flex items-center justify-center py-40 px-96">
      <div className="block px-20">
        <h1 class="font-bold text-5xl">Hi I am Agustinus!</h1>
          <h2 class="font-med text-2xl py-3">I am a corporate planner/strategist, translator (EN/JP/ID) and a software-engineer.</h2>
      </div>
      <div className="block">
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full"
          src="/images/profile.jpg"
          alt="Next.js Logo"
          width={360}
          height={360}
          priority
        />
      </div>
      </div>
      <div class="w-full flex item-center  justify-center">
        <h1 class="text-6xl text-center">
          Life story...
        </h1>
      </div>
    </main>
  )
}
