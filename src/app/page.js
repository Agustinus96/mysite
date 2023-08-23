import Image from 'next/image'
import Blog from '../../components/blog'
import Footer from '../../components/footer'
import Link from 'next/link';
import { getAllPosts } from './lib/api';


export default async function Home() {

  const posts = await getAllPosts();

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
      <div class="animate-fade-up animate-once animate-duration-[1200ms] animate-delay-[1000ms] animate-ease-in-out animate-fill-both w-8/12 item-center text-center justify-center px-[10%] py-[40px] bg-blue-400 bg-opacity-40 rounded-[30px] m-[auto] mt-[100px] mb-[200px]">
        <h1 class="text-6xl text-center">
          Life story....
        </h1>
        <h2 class="py-2">
          I was born and raised in Bandung Indonesia, went to an international highschool in Singapore and graduated from one of the seven Imperial Universities in Japan.
        </h2>
        <h2>
          I studied natural science and social science throughout my education including business managements, physics, chemistry and Japanese literature. I am a fast learner and can work well under pressure and tight deadlines. I have worked for Japanese companies in different industries with many subsidiaries all over the worlds. In one of my earlier job, I was responsible in managing and had to work with top level managements from both parent companies and oversea subsidiaries. I was able to identify a crucial problem and turned it into an opportunity for the company. Through this we manage to achieve a big turn around and recovered 3-years of cummulative loss in 1 year. 
        </h2>
      </div>
      <div class="animate-fade animate-once animate-duration-[1200ms] animate-delay-[1500ms] animate-ease-in-out animate-fill-both border-y-[2px] border-y-indigo-500 bg-cyan-500 text-center py-[30px] m-[auto] py-[50px]">
      <h1 class="animate-fade-up animate-once animate-duration-[1200ms] animate-delay-[1500ms] animate-ease-in-out animate-fill-both text-6xl py-2">
        My blog
      </h1>

      <h2 class="animate-fade-up animate-once animate-duration-[1200ms] animate-delay-[1500ms] animate-ease-in-out animate-fill-both text-4xl py-2">
        All posts:
      </h2>
      <ul class="flex flex-nowrap overflow-x-auto space-x-8 mx-4">
        {posts.map((post) => {
          const { id, date, title } = post;
          return (
            <div class="align-center animate-fade-up animate-once animate-duration-[1200ms] animate-delay-[1500ms] animate-ease-in-out animate-fill-both shrink-0 w-4/12 bg-black bg-opacity-40 py-[50px] rounded-[20px] my-[20px]">
              <li key={id}>
              <Image
          class="row m-[auto] py-3 dark:drop-shadow-[0_0_0.3rem_#ffffff70] md:min-w-[120px] item-center"
          src={`/images/${id}.jpeg`}
          alt="Next.js Logo"
          width={120}
          height={120}
          priority
        />
                <Link href={`/posts/${id}`}>
                  {date} - {title}
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
        <div class="w-full text-center bg-emerald-900 bg-opacity-60">
        <Footer />
        </div>
    </main>
  )
}


