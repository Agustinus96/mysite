import { getAllPosts } from "../src/app/lib/api";
import Link from "next/link";
import Image from "next/image";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div class="animate-fade animate-once animate-duration-[1200ms] animate-delay-[1500ms] animate-ease-in-out animate-fill-both shadow-[inset_0px_3px_4px_rgba(0,0,0,0.6)] bg-[#1d202f] bg-opacity-70 backdrop-blur-sm text-center m-[auto] py-[50px]">
      <h1 class="animate-fade-up animate-once animate-duration-[1200ms] animate-delay-[1500ms] animate-ease-in-out animate-fill-both text-6xl py-2">
        My blog
      </h1>

      <h2 class="animate-fade-up animate-once animate-duration-[1200ms] animate-delay-[1500ms] animate-ease-in-out animate-fill-both text-4xl py-2">
        All posts:
      </h2>
      <ul class="flex flex-nowrap overflow-x-auto space-x-8 mx-8">
        {posts.map((post) => {
          const { id, date, title } = post;
          return (
            <div key={id}>
              <li>
                <Link href={`/posts/${id}`}>
                  <div class="w-[90%] duration-500 hover:w-[95%] align-center animate-fade-up animate-once animate-duration-[1200ms] animate-delay-[1500ms] animate-ease-in-out animate-fill-both shrink-0 bg-[#9D0191] shadow-purple-500/40 hover:shadow-purple-500 shadow-md hover:duration-1000 hover:shadow-xl bg-opacity-90 px-[20px] py-[30px] rounded-[20px] mx-[100px] my-[20px]">
                    <Image
                      class="rounded-[20px] h-full row m-[auto] py-3 dark:drop-shadow-[0_0_0.3rem_#ffffff70] md:min-w-[120px] item-center"
                      src={`/images/${id}.jpeg`}
                      alt="Next.js Logo"
                      width={120}
                      height={120}
                      priority
                    />
                    {date} - {title}
                  </div>
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
