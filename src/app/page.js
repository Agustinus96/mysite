import Image from 'next/image'

export default function Home() {
  return (
    <main class="row">
      <div className="animate-fade-up animate-once animate-duration-[1200ms] animate-delay-500 animate-ease-in-out animate-fill-both w-8/12 md:flex flex-row items-center justify-center py-40 px-[auto] m-[auto]">
      <div className="md:basis-1/2 px-[10%] md:py-[10px] py-[30px]">
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full md:min-w-[360px]"
          src="/images/profile.jpg"
          alt="Next.js Logo"
          width={360}
          height={360}
          priority
        />
      </div>
      <div className="md:basis-1/2 px-[10%] md:text-left text-center">
        <h1 class="font-bold text-5xl">Hi I am Agustinus!</h1>
          <h2 class="font-med text-2xl py-3">I am a corporate planner/strategist, translator (EN/JP/ID) and a software-engineer.</h2>
      </div>
      </div>
      <div class="animate-fade-up animate-once animate-duration-[1200ms] animate-delay-[1000ms] animate-ease-in-out animate-fill-both w-8/12 item-center text-center justify-center px-[10%] py-[40px] bg-blue-400 bg-opacity-40 rounded-[30px] m-[auto]">
        <h1 class="text-6xl text-center">
          Life story....
        </h1>
        <h2 class="py-2">
          I was born and raised in Bandung Indonesia, went to an international Highschool in Singapore and graduated from one of the seven Imperial Universities in Japan.
        </h2>
        <h2>
          As a fast learner, I picked up skills and languages throughout my journey in different countries and environments.
        </h2>
      </div>
    </main>
  )
}
