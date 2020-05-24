/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it

/**
 * You can uncomment the following line to verify that
 * your plugin is being loaded in your site.
 *
 * See: https://www.gatsbyjs.org/docs/creating-a-local-plugin/#developing-a-local-plugin-that-is-outside-your-project
 */
exports.onPreInit = () => console.log("Loaded gatsby-starter-plugin")

const fetch = require(`node-fetch`)

// constants for your GraphQL Post and Author types
const POST_NODE_TYPE = `Pages`
exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  getNodesByType,
}) => {
  const { createNode } = actions

  const response = await fetch(
    "http://localhost:5000/nghelvetia/us-central1/editor-delivery/1wlYeL1w38tR45NkJG0c"
  )
  const pages = await response.json()
  console.log("CHIASLDFA SDFLKAs -dfU ")
  console.log(pages.children.map(item => item.name).join(""))
  createNode({
    ...pages.index, 
    business: {...pages.business },
    id: "index", //createNodeId(`${POST_NODE_TYPE}-${pages.index.id}`),
    parent: null,
    
    internal: {
      type: POST_NODE_TYPE,      
      contentDigest: createContentDigest(pages.index),
    },
  })
  //children: pages.children.map(item => item.name).join(""),
  pages.children.forEach(page => {
    console.log("page name " + page.name)

    createNode({
        ...page.content, 
        business: {...pages.business },
        id: page.name, //createNodeId(`${POST_NODE_TYPE}-${pages.index.id}`),
        parent: null,
        
        internal: {
          type: POST_NODE_TYPE,      
          contentDigest: createContentDigest(pages.index),
        },
    })
  })

  /*
  data.posts.forEach(post =>
    createNode({
      ...post,
      id: createNodeId(`${POST_NODE_TYPE}-${post.id}`),
      parent: null,
      children: [],
      internal: {
        type: POST_NODE_TYPE,
        content: JSON.stringify(post),
        contentDigest: createContentDigest(post),
      },
    })*/

  return
}
const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
      query {
        allPages {
            totalCount
            nodes {
              id      
              business {name}
              public
              defaultLanguage
              languages {
                de {
                  meta {
                    title
                  }
                }
              }
            }
          }
      }
    `)
    console.log(result.data);
    result.data.allPages.nodes.forEach(({ id, defaultLanguage }) => {        

      createPage({
        path: defaultLanguage + "/"+ id,
        component: path.resolve(`./src/layouts/pages.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          id  
        },
      })
    })
  }