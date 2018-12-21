import Layout from "../components/Layout";
import Trailer from "../components/trailer";
// import Img from '../static/image1.jpg'
const blogs = [
  { id: 0, title: "Alkaline" },
  { id: 1, title: "Minerals" },
  { id: 2, title: "Alkaline" },
  { id: 3, title: "Minerals" },
  { id: 4, title: "Alkaline" },
  { id: 5, title: "Minerals" }
];

const Blog = () => {
  // console.log(Img)
  return (
    <Layout title="Blog">
      <Trailer items={blogs} />
    </Layout>
  );
};
export default Blog;
