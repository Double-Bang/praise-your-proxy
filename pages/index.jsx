import Navbar from "../components/Navbar";
import PostFeed from "../components/PostFeed";
import { getPosts } from '../pages/api/user';

const IndexPage = (props) => {
  const { posts } = props;

  return (
  <>
  <Navbar/>
    <PostFeed posts={posts}
    />
  </>
)};

export const getStaticProps = async (context) => {
  const posts = await getPosts();
  return { props: { posts: JSON.parse(JSON.stringify(posts)) },
           revalidate: 1};
};

export default IndexPage;
