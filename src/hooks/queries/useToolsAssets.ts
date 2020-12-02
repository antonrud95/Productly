import { useStaticQuery, graphql } from 'gatsby'

const useToolsAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      toolsBg: file(relativePath: { eq: "images/tools/Bg.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return data
}

export default useToolsAssets
