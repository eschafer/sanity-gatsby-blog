export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "605fd0c1baa035ff41a69bbd",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-6bh32bz9",
                  apiId: "b83807a7-da61-4002-a74e-c9d192804fba",
                },
                {
                  buildHookId: "605fd0c2baa035ff41a69bbe",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-o47f7xwy",
                  apiId: "5008dc39-c049-4939-b519-a6a113792484",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/eschafer/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-o47f7xwy.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
