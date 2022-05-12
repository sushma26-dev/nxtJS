import Link from "next/link";

export default function PostItem({ posts }) {
  return (
    <div >
      <Link href="/post/[id]" as={`/post/${posts.id}`}>
        <a>
          <h3>{posts.id} - {posts.title}</h3>
          <p>{posts.body}</p>
        </a>
      </Link>

    </div>
  )
}