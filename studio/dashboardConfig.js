export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6238ce655a5ee8005fd68e20',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zzzrw7k3',
                  apiId: 'b071ea5b-bdc1-4c8c-803f-23d32660ac8c'
                },
                {
                  buildHookId: '6238ce65612ab300916630fb',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-w6987kvu',
                  apiId: 'bb341a00-0850-4586-96f3-b9b60dcec165'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sherwingp/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-w6987kvu.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
