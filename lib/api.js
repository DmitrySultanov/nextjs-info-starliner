export const API_URL = process.env.NEXT_PUBLIC_BACKEND_API;

async function fetchAPI(query, { variables } = {}, tags = '') {
  // Set up some headers to tell the fetch call
  // that this is an application/json type
  const headers = { 'Content-Type': 'application/json' };

  // build out the fetch() call using the API_URL
  // environment variable pulled in at the start
  // Note the merging of the query and variables
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
    next: { 
      tags: [tags] 
    }
  });

  // error handling work
  const json = await res.json();

  // console.log(json)
  if (json.errors) {
    // console.log(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}


// export async function getAllPosts(preview) {
//     const data = await fetchAPI(
//       `
//       query AllPosts {
//         posts(first: 20, where: { orderby: { field: DATE, order: DESC}}) {
//           edges {
//             node {
//               id
//               date
//               slug
//               title
//               featuredImage {
//                 node {
//                   mediaItemUrl
//                 }
//               }
//               author {
//                 node {
//                   firstName
//                   locale
//                 }
//               }
//               excerpt
//             }
//           }
//         }
//       }
//       `
//     );
  
//     return data?.posts;
// }

export async function getPosts(first = 9, before) {
  const data = await fetchAPI(
    `
    query allPosts($first: Int!, $before: String) {
      posts(first: $first, before: $before, where: { orderby: { field: DATE, order: DESC }}) {
        edges {
          node {
            id
            date
            slug
            title
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            excerpt
            categories {
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
    `,
    {
      variables: {
        first: first,
        before: before,
      },
    },
    'posts'
  );
  return data?.posts;
}

export async function getRecentPosts() {
  const data = await fetchAPI(
    `
      query RecentPosts {
        posts(first: 6, where: { orderby: { field: DATE, order: DESC } }) {
          edges {
            node {
              date
              slug
              id
              title
              excerpt
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    `
  );

  return data?.posts?.edges;
}

export async function getPostsByCategoryId(categoryId, first = 9, before) {
  const data = await fetchAPI(
    `
    query postsByCategoryId($categoryId: Int, $first: Int!, $before: String) {
      posts(first: $first, before: $before, where: {categoryId: $categoryId, orderby: { field: DATE, order: DESC }}) {
        edges {
          node {
            id
            date
            slug
            title
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            excerpt
            categories {
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
    `,
    {
      variables: {
        categoryId: categoryId,
        first: first,
        before: before,
      },
    },
    'categoryPosts'
  );
  return data?.posts;
}

export async function getPost(slug) {
  const data = await fetchAPI(
    `
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        categories {
          nodes {
            slug
            name
            categoryId
          }
        }
      }
    }
  `,
    {
      variables: {
        id: slug,
        idType: 'SLUG'
      }
    }
  );
  return data?.post;
}  

export async function getPostsCaterories(id) {
  const data = await fetchAPI(
    `
    query postsCategories {
      categories(where: {parent: 18, hideEmpty: true}) {
        edges {
          node {
            uri
            termTaxonomyId
            slug
            name
          }
        }
      }
    }
    `,
    // {
    //   variables: {
    //     id: id,
    //   }
    // }
  )

  return data?.categories?.edges;
}

export async function getPrimaryMenu() {
  const data = await fetchAPI(
    `
    query primaryMenu {
      menuItems(where: {parentDatabaseId: 0}) {
        nodes {
          uri
          target
          path
          childItems {
            nodes {
              uri
              target
              childItems {
                nodes {
                  label
                  target
                  uri
                }
              }
              label
            }
          }
          label
        }
      }
    }
    `
  )
  
  return data?.menuItems;
}

export async function getSinglePageBySlug(slug) {
  const data = await fetchAPI(
    `
    query getSinglePage {
      pages(where: {name: "${slug}"}) {
        nodes {
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          slug
          title
          content
        }
      }
    }
    `,
  )

  return data?.pages?.nodes[0]
}

// export async function sendMail(subject, body, mutationId = 'contact') {
//   const fromAddress = 'noreply@testuser.ru';
//   const toAddress = 'testuser@testuser.ru';
//   const data = await fetchAPI(
//     `
//         mutation SendEmail($input: SendEmailInput!) {
//             sendEmail(input: $input) {
//                 message
//                 origin
//                 sent
//             }
//         }
//     `,
//     {
//       variables: {
//         input: {
//             clientMutationId: mutationId,
//             from: fromAddress,
//             to: toAddress,
//             body: body,
//             subject: subject
//         }
//       }
//     }
//   );

//   return data?.sendEmail;
// }


// export async function getAllPostsWithSlug() {
//     const data = await fetchAPI(
//       `
//       {
//         posts(first: 10000) {
//           edges {
//             node {
//               slug
//             }
//           }
//         }
//       }
//     `);
//     return data?.posts;
// }