// import { useRouter } from "next/router"
import Link from "next/link";

export default function PostDetail({ data }) {
  // const rot = useRouter()
  return (
      <div >
        <h2>{data.title}</h2>
        <p>{data.body}</p>
        <br />
        <Link href='/'>Go Back</Link>
      </div>
    )
  }

  // This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const data = await res.json()
  // Pass data to the page via props
  return { props: { data } }
}