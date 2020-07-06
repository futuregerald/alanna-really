import Layout from '@components/Layout'
import PostList from '@components/PostList'

import getPosts from '@utils/getPosts'

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <h1 className="title">Welcome to this ridiculous page that Alanna wanted.</h1>
  <img src="https://vignette.wikia.nocookie.net/horrormovies/images/3/3e/HenryBowers.png/revision/latest?cb=20190312134628" />
    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fvariety.com%2F2018%2Ffilm%2Fnews%2Fit-chapter-2-teach-grant-adult-henry-bowers-1202856265%2F&psig=AOvVaw1hSp2mVLxN7nHPSgvD6HpE&ust=1594152748369000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiQg_e3ueoCFQAAAAAdAAAAABAH" />
    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wattpad.com%2Fstory%2F160637288-henry-bowers-my-love%25F0%259F%2598%258D&psig=AOvVaw1hSp2mVLxN7nHPSgvD6HpE&ust=1594152748369000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiQg_e3ueoCFQAAAAAdAAAAABAN" />
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
