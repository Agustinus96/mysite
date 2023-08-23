import Link from "next/link"
import { getPostById, getAllPosts } from "../../lib/api"

// Generate the post, note that this is a "react server component"! it is
// allowed to be async
export default async function Post({ params: { id } }) {
  const { html, title, date } = await getPostById(id)
  return (
    <div>
    <article class="animate-fade-up animate-once animate-duration-[1200ms] animate-delay-[500ms] animate-ease-in-out animate-fill-both">
      <h1 class="font-bold text-center text-[40px] pt-[50px]">{title}</h1>
      <h4 class="text-gray-800 italic m-[auto] text-center">{date}</h4>
      <div className="m-[auto] pt-[30px] w-[80%] max-w-[720px] text-justify pb-[30px]" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
    <div class="flex m-[auto] text-center bg-white w-[200px] h-[50px] rounded-xl hover:bg-black hover:text-white ">
    <Link class="m-[auto] font-bold text-blue-500 hover:text-inherit text-center h-[50px] align-middle pt-[12px]" href="/">Back to home </Link>
    </div>
    </div>
  )
}

// This function can statically allow nextjs to find all the posts that you
// have made, and statically generate them
export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map(post => ({
    id: post.id
  }))
}

// Set the title of the page to be the post title, note that we no longer use
// e.g. next/head in app dir, and this can be async just like the server
// component
export async function generateMetadata({ params: { id } }) {
  const { title } = await getPostById(id)
  return {
    title
  }
}
