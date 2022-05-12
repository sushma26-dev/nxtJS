import Head from 'next/head'
import Nav from '../comp/nav'
import PostList from '../comp/postList'

export default function Home({ posts }) {
  return (
    <div >
      <Head>
        <title>new nxt work</title>
      </Head>
      <Nav />
      <h1>Welcome to JSnxt</h1>
      <PostList post={posts}/>
    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}