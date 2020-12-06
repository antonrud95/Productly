import { useStaticQuery, graphql } from 'gatsby'

const useContactsAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      contactsBg: file(relativePath: { eq: "images/contacts/Bg.png" }) {
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

export default useContactsAssets
