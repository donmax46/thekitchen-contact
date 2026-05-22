const STOREFRONT_ACCESS_TOKEN =
"YOUR_SHOPIFY_TOKEN";

const SHOPIFY_DOMAIN =
"yourstore.myshopify.com";

async function fetchShopifyProducts(){

  const query = `

  {
    products(first:10){

      edges{

        node{

          title

          description

          images(first:1){

            edges{

              node{
                src
              }

            }

          }

        }

      }

    }

  }

  `;

  const response =
  await fetch(

    `https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`,

    {

      method:"POST",

      headers:{
        "Content-Type":"application/json",
        "X-Shopify-Storefront-Access-Token":
        STOREFRONT_ACCESS_TOKEN
      },

      body:JSON.stringify({query})

    }

  );

  const data =
  await response.json();

  console.log(data);

}
