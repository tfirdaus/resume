const commits = [
  {
    organization: {
      title: 'SLIGHT (formerly SlightShop)',
      slug: 'slight',
      url: 'http://www.slightshop.com',
      location: 'Greater Jakarta Area, Indonesia'
    },
    role: {
      title: 'Web Developer',
      description: 'Develop an e-Commerce website using WP-eCommerce, which was the most popular WordPress shopping cart plugin during that time. I also optimize the website for Search Engines with some SEO techniques. Train new hire of developers (2011 to 2012).'
    },
    date: {
      start:'Jul, 2009',
      end: 'Feb, 2012'
    },
    tags: [
      'remote',
      'design',
      'ecommerce',
      'seo'
    ],
    recommendations: [
      {
        person: 'Nerissa Arviana',
        role: 'SLIGHT Co-founder',
        description: 'I have been using Thoriq\'s service since I started my online business back in 2009. As a web programmer, he always try his best to accommodate my ideas and inspirations and turn it into a great web display and applications. Personally, I think he is young and independent.'
      },
      {
        person: 'Andina Irvani',
        role: 'SLIGHT Founder',
        description: 'I have worked with Thoriq Firdaus since 2008, he created ecommerce website for my product. He is a bright website creator, he managed to fulfill all the requests that were required for a decent and professional ecommerce website, He also has a good taste of website design.'
      }
    ]
  },
  {
    organization: {
      title: 'vKios.com',
      slug: 'vkios',
      url: 'https://www.vkios.com',
      location: 'Surabaya, Indonesia'
    },
    role: {
      title: 'Web Developer',
      description: 'Design and develop e-Commerce website templates for the clients and subscribers.  Revamp the Administration interface where the clients and the subscribers manage their products.'
    },
    date: {
      start:'Mar, 2011',
      end: 'Jul, 2012'
    },
    tags: [
      'in-house',
      'design',
      'ecommerce',
      'refactoring'
    ]
  },
  {
    organization: {
      title: 'Tuts+',
      slug: 'tutsplus',
      url: 'https://tutsplus.com/authors/tfirdaus',
      location: 'Melbourne, Australia',
      image: {
        logo: './images/logo-envato.svg',
        favicon: './images/favicon-envato.png'
      }
    },
    role: {
      title: 'Tutorial Instructor',
      description: 'Write tips and tutorials on web design and developments at Tuts+ Web Design, focusing on CSS, HTML, JavaScript, web development tools, and web design frameworks. Occasionally, translate tutorials to the Indonesian language.'
    },
    date: {
      start: 'Nov, 2011',
      end: 'Jul, 2016'
    },
    tags: [
      'remote',
      'writing',
      'tips',
      'tutorial'
    ],
    recommendations: [
      {
        person: 'Ian Yates',
        role: 'Tuts+ Web Design Editor',
        description: 'As editor of an education platform I value several things in a writer: in-depth knowledge, an ability to communicate complex ideas in a simple way, curiosity, openness, and reliability. Thoriq has delivered all these by the bucketload over the years we’ve worked together – I only wish it were easier to find more like him!.'
      }
    ]
  },
  {
    organization: {
      title: 'Hongkiat.com',
      slug: 'hongkiatcom',
      url: 'http://www.hongkiat.com/blog/',
      location: 'Singapore',
      image: {
        logo: './images/logo-hongkiat.svg',
        favicon: './images/favicon-hkdc.png'
      }
    },
    role: {
      title: 'Writer & Editorial Panel',
      description: 'Write tips and tutorials on web design and developments. As a Technical Editor, I review submission for some technical posts for its accuracy and validate the code.'
    },
    date: {
      start: 'Jul, 2012',
      end: 'Nov, 2014'
    },
    tags: [
      'remote',
      'writing',
      'tips',
      'tutorial'
    ],
    recommendations: [
      {
        person: 'Singyin Lee',
        role: 'Senior Editor',
        description: 'Thoriq is very knowledgeable in his writing scope which made my job as an editor that much easier. He is a great tutorial writer who will go the extra mile to produce content that are easy to read and follow. His "can do" attitude is a strong and infectious motivator, which rubs off on the people who work with him as well. He\'s a pleasure to work and collaborate with.'
      }
    ]
  },
  {
    organization: {
      title: 'Hongkiat.com',
      slug: 'hongkiatcom',
      url: 'https://www.hongkiat.com/blog/',
      location: 'Singapore',
      image: {
        logo: './images/logo-hongkiat.svg',
        favicon: './images/favicon-hkdc.png'
      }
    },
    role: {
      title: 'Web Developer',
      description: 'Revamp the WordPress theme using WP-API, Backbone, and Underscores. Develop a couple of WordPress plugins to use internally. Configure CI/CD flow for automatic testing and deployment with Bitbucket Pipelines. Site maintenance and troubleshooting.'
    },
    date: {
      start:'Nov, 2014',
      end: null
    },
    tags: [
      'remote',
      'refactoring',
      'docker',
      'theme',
      'plugins'
    ]
  },
  {
    organization: {
      title: 'Smashing Magazine',
      slug: 'smashingmag',
      url: 'https://www.smashingmagazine.com/',
      location: 'Freiburg Area, Germany',
      image: {
        logo: './images/logo-smashingmag.svg',
        favicon: './images/favicon-smashingmag.png'
      }
    },
    role: {
      title: 'Editorial Panel',
      description: 'Review WordPress articles submission for the content accuracy and validate the code.'
    },
    date: {
      start:'Mar, 2015',
      end: 'May, 2016'
    },
    tags: [
      'freelance',
      'remote',
      'reviewing',
      'editing'
    ],
    recommendations: [
      {
        person: 'Daniel Pataki',
        role: 'Editor of the WordPress Section',
        description: 'Thoriq was the most thorough reviewer I worked with. Working with him was effortless, he has great communication skills and always delivered well before deadlines. His ability to spot little flaws in a wide range of topics, to go into detail where necessary was instrumental in publishing only high-quality material on the site.'
      }
    ]
  },
  {
    organization: {
      title: 'WordPress.org',
      slug: 'wordpress',
      url: 'https://wordpress.org',
      location: 'Worldwide',
      image: {
        logo: './images/logo-wp.svg',
        favicon: './images/favicon-wp.png'
      }
    },
    role: {
      title: 'Project Translation Editor',
      description: 'Translating and editing WordPress projects to Indonesian.'
    },
    date: {
      start: 'Nov, 2016',
      end: null
    },
    tags: [
      'volunteer',
      'translation',
      'editing'
    ]
  },
  {
    organization: {
      title: 'Kinsta',
      slug: 'kinsta',
      url: 'https://www.kinsta.com/',
      location: 'Budapest, Hungary',
      image: {
        logo: './images/logo-kinsta.svg',
        favicon: './images/favicon-kinsta.png'
      }
    },
    role: {
      title: 'Technical Support Engineer',
      description: 'Research, troubleshoot, and identify solutions to resolve customer issues. Occasionally, submit a patch to Kinsta Cache plugin that\'s used internally for clients. Also, create a Google Chrome extension of my own initiative to help to troubleshoot the issues on the client sites.'
    },
    date: {
      start: 'Feb, 2017',
      end: null
    },
    tags: [
      'remote',
      'support',
      'troubleshooting',
      'plugins'
    ],
    recommendations: [
      {
        person: 'Jon Penland',
        role: 'Chief Customer Officer at Kinsta',
        description: 'Thoriq is a highly valued member of Kinsta\'s support team. He is reliable, gets along well with everyone, enthusiastically takes on extra tasks when asked, is an excellent developer, knows WordPress backwards and forwards, and our clients love to work with him. There really isn\'t much else I could ask for! When it comes to technical customer-facing responsibilities, Thoriq excels.'
      }
    ]
  }
].reverse();

export default commits;
