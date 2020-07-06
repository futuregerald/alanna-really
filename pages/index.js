import Layout from '@components/Layout'
import PostList from '@components/PostList'

import getPosts from '@utils/getPosts'

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <h1 className="title">Welcome to this ridiculous page that Alanna wanted.</h1>
  <img src="https://vignette.wikia.nocookie.net/horrormovies/images/3/3e/HenryBowers.png/revision/latest?cb=20190312134628" />
    <img src="https://a.wattpad.com/cover/160637288-352-k923154.jpg" />
    <img src="https://images.indianexpress.com/2018/06/it-chapter-2-7591.jpg" />
      </Layout>
      <style jsx>{`
        .title {
          margin: 1rem auto;
          font-size: 3rem;
        }
      `}</style>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    return getPosts(context)
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
