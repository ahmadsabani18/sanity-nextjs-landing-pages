export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e319c715623e75599ac9c00',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cuhvo982',
                  apiId: '8c14fd89-3bf1-4b67-b1a9-4bd6778334eb'
                },
                {
                  buildHookId: '5e319c725623e7a047ac9bea',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-h1xyd1hm',
                  apiId: '2bbb1e91-6dc6-4dfb-b6b2-ae4ed786e3a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ahmadsabani18/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-h1xyd1hm.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
