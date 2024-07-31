import { Post } from "@/types/Post"
import { Metadata } from "next"

type Props = {
  params: {
    postId: string
  }
}

export const metadata: Metadata = {
  title: 'Blog'
}

const Page = async ({ params }: Props) => {
  const postRequest = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const post: Post = await postRequest.json()

  return(
    <div className="text-center">
      <div>ID: {post.id}</div>
      <h1 className="text-3xl uppercase my-3">{post.title}</h1>
      <p>{post.body}</p>
  </div>
  )
}

export default Page;