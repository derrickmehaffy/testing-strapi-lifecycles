module.exports = {
  query: `
    blogPostByUID(uid: String!): BlogPost
  `,
  resolver: {
    Query: {
      blogPostByUID: {
        description: 'Return a single blog post by uid',
        resolver: 'application::blog-post.blog-post.findOneByUID'
      }
    },
  },
};
