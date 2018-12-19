import Layout from "../components/Layout";
import Trailer from "../components/Trailer"

const blogs = [{ title: "Tensorflow" }, { title: "PyTorch" }];

const Blog = () => {
  return (
    <Layout title="Blog">
      <Trailer items={blogs}/>
    </Layout>
  )
}
export default Blog
