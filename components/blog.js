import { getAllPosts } from "../src/app/lib/api";
import Link from "next/link";
import Image from "next/image";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
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
            <div key={id} class="align-center animate-fade-up animate-once animate-duration-[1200ms] animate-delay-[1500ms] animate-ease-in-out animate-fill-both shrink-0 w-4/12 bg-black bg-opacity-40 py-[50px] rounded-[20px] my-[20px]">
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
  );
}
