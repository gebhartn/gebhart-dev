module.exports = {
  navigation: [
    {
      name: 'Home',
      to: '/',
    },
    {
      name: 'Blog',
      to: '/blog',
    },
    {
      name: 'Contact',
      to: '/contact',
    },
  ],
  footer: {
    logos: [
      {
        internal: false,
        href: 'https://github.com/gebhartn/',
        title: 'GitHub',
        alt: 'GitHub Ocotocat Logo',
        target: '_blank',
        rel: 'noopener noreferrer',
        src: 'github.svg',
      },
      {
        internal: false,
        href: 'https://www.netlify.com',
        title: 'Netlify',
        alt: 'Netlify Logo',
        target: '_blank',
        rel: 'noopener noreferrer',
        src: 'netlify.svg',
      },
      {
        internal: false,
        href: 'https://www.gatsbyjs.org',
        title: 'Gatsby',
        alt: 'Gatsby Logo',
        target: '_blank',
        rel: 'noopener noreferrer',
        src: 'gatsby.svg',
      },
    ],
    text: [
      {
        internal: true,
        name: 'Home',
        to: '/',
      },
      {
        internal: true,
        name: 'Blog',
        to: '/blog',
      },
      {
        internal: true,
        name: 'Contact',
        to: '/contact',
      },
      {
        internal: false,
        name: 'RSS Feed',
        to: '/rss.xml',
      },
    ],
  },
}
