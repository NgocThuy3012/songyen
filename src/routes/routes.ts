export const ROUTES = {
  LOGIN: '/login',

  HOME: '/',

  PAGE: {
    LIST: '/pages',
    UPDATE: '/pages/detail/:id',
  },

  CATEGORY: {
    LIST: '/category',
    UPDATE: '/category/detail/:id',
    CREATE: '/category/detail',
  },

  POSTS: {
    LIST: '/posts',
    CREATE: '/posts/detail',
    UPDATE: '/posts/detail/:id',
  },

  ABOUT_US: {
    MEMBERS: {
      LIST: '/about-us/members',
      CREATE: '/about-us/members/detail',
      UPDATE: '/about-us/members/detail/:id',
    },

    FEEDBACKS: {
      LIST: '/about-us/feedbacks',
      CREATE: '/about-us/feedbacks/detail',
      UPDATE: '/about-us/feedbacks/detail/:id',
    },
  },

  CUSTOMERS: {
    LIST: '/customers',
    CREATE: '/customers/detail',
    UPDATE: '/customers/detail/:id',
  },

  CONTACT_FORM: {
    LIST: '/contact-forms',
  },

  CONFIG: {
    INFORMATION: '/config/information',
    FOOTER: '/config/footer',
  },
  USERS: {
    LIST: '/users',
    CREATE: '/users/detail',
    UPDATE: '/users/detail/:id',
  },
};
