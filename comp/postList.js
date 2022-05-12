import artStyles from '../styles/Home.module.css'
import PostItem from './postItem'
 
export default function PostList({ post }) {
    return (
        <div >
            {
                post.map((pos, i) => (
                    <PostItem key={i} posts={pos} />
                ))
            }
        </div>
    )
}