export interface ProjectProps {
  icons: string[];
  image: string;
  links: {
    code: string;
    live?: string;
  };
  name: string;
}

export interface ProjectsProps {
  [key: string]: ProjectProps[];
}

export const projects: ProjectsProps = {
  openSource: [
    {
      name: 'Boostnote',
      image: '/boostnote.jpg',
      icons: ['devicon-react-original colored'],
      links: {
        live: 'https://boostnote.io/',
        code: 'https://github.com/BoostIO/Boostnote',
      },
    },
    {
      name: 'freeCodeCamp',
      image: '/freecodecamp.jpg',
      icons: [
        'devicon-html5-plain colored',
        'devicon-css3-plain colored',
        'devicon-javascript-plain colored',
      ],
      links: {
        live: 'https://www.freecodecamp.org/',
        code: 'https://github.com/freeCodeCamp/freeCodeCamp',
      },
    },
    {
      name: 'flag-icon-css',
      image: '/flagiconcss.jpg',
      icons: [],
      links: {
        live: 'http://flag-icon-css.lip.is/',
        code: 'https://github.com/lipis/flag-icon-css',
      },
    },
  ],
  personal: [
    {
      name: 'World Through Postcards',
      image: '/worldthroughpostcards.gif',
      icons: [
        'devicon-html5-plain colored',
        'devicon-css3-plain colored',
        'devicon-react-original colored',
      ],
      links: {
        live: 'https://ncaron.github.io/world-through-postcards/',
        code: 'https://github.com/ncaron/world-through-postcards',
      },
    },
    {
      name: 'Image Palette',
      image: '/imagepalette.gif',
      icons: [
        'devicon-html5-plain colored',
        'devicon-sass-original colored',
        'devicon-react-original colored',
        'devicon-webpack-plain colored',
      ],
      links: {
        live: 'https://ncaron.github.io/image-palette/',
        code: 'https://github.com/ncaron/image-palette',
      },
    },
    {
      name: 'Autogreeter',
      image: '/autogreeter.gif',
      icons: [
        'devicon-html5-plain colored',
        'devicon-css3-plain colored',
        'devicon-javascript-plain colored',
      ],
      links: {
        live: 'https://ncaron.github.io/autogreeter/',
        code: 'https://github.com/ncaron/autogreeter',
      },
    },
  ],
  education: [
    {
      name: 'Etch-A-Sketch',
      image: '/etchasketch.gif',
      icons: [
        'devicon-html5-plain colored',
        'devicon-css3-plain colored',
        'devicon-javascript-plain colored',
      ],
      links: {
        live: 'https://ncaron.github.io/etch-a-sketch/',
        code: 'https://github.com/ncaron/etch-a-sketch',
      },
    },
    {
      name: 'Pomodoro Clock',
      image: '/pomodoroclock.gif',
      icons: [
        'devicon-html5-plain colored',
        'devicon-sass-original colored',
        'devicon-react-original colored',
        'devicon-webpack-plain colored',
      ],
      links: {
        live: 'https://ncaron.github.io/pomodoro-clock/',
        code: 'https://github.com/ncaron/pomodoro-clock',
      },
    },
    {
      name: 'React Calculator',
      image: '/reactcalculator.gif',
      icons: [
        'devicon-html5-plain colored',
        'devicon-sass-original colored',
        'devicon-react-original colored',
        'devicon-webpack-plain colored',
      ],
      links: {
        live: 'https://ncaron.github.io/react-calculator/',
        code: 'https://github.com/ncaron/react-calculator',
      },
    },
    {
      name: 'Contact Manager',
      image: '/contactmanager.gif',
      icons: [
        'devicon-html5-plain colored',
        'devicon-css3-plain colored',
        'devicon-javascript-plain colored',
        'devicon-jquery-plain colored',
        'devicon-handlebars-plain',
      ],
      links: {
        live: 'https://ncaron.github.io/contact-manager/',
        code: 'https://github.com/ncaron/contact-manager',
      },
    },
    {
      name: 'WYSIWYG Editor',
      image: '/wysiwygeditor.gif',
      icons: [
        'devicon-html5-plain colored',
        'devicon-css3-plain colored',
        'devicon-javascript-plain colored',
      ],
      links: {
        live: 'https://ncaron.github.io/WYSIWYG-Editor/',
        code: 'https://github.com/ncaron/WYSIWYG-Editor',
      },
    },
    {
      name: 'Twitch Viewer',
      image: '/twitchviewer.gif',
      icons: [
        'devicon-html5-plain colored',
        'devicon-css3-plain colored',
        'devicon-react-original colored',
        'devicon-webpack-plain colored',
      ],
      links: {
        live: 'https://ncaron.github.io/twitch-viewer/',
        code: 'https://github.com/ncaron/twitch-viewer',
      },
    },
    {
      name: 'Wikipedia Viewer',
      image: '/wikipediaviewer.gif',
      icons: [
        'devicon-html5-plain colored',
        'devicon-sass-original colored',
        'devicon-react-original colored',
        'devicon-webpack-plain colored',
      ],
      links: {
        live: 'https://ncaron.github.io/wikipedia-viewer/',
        code: 'https://github.com/ncaron/wikipedia-viewer',
      },
    },
    {
      name: 'RPSLS',
      image: '/rpsls.gif',
      icons: [
        'devicon-html5-plain colored',
        'devicon-css3-plain colored',
        'devicon-react-original colored',
        'devicon-webpack-plain colored',
      ],
      links: {
        live: 'https://ncaron.github.io/RPSLS/',
        code: 'https://github.com/ncaron/RPSLS',
      },
    },
    {
      name: 'Local Weather',
      image: '/localweather.gif',
      icons: [
        'devicon-html5-plain colored',
        'devicon-sass-original colored',
        'devicon-react-original colored',
        'devicon-webpack-plain colored',
      ],
      links: {
        live: 'https://ncaron.github.io/local-weather/',
        code: 'https://github.com/ncaron/local-weather',
      },
    },
    {
      name: 'Random Quote',
      image: '/randomquote.gif',
      icons: [
        'devicon-html5-plain colored',
        'devicon-sass-original colored',
        'devicon-react-original colored',
        'devicon-webpack-plain colored',
      ],
      links: {
        live: 'https://ncaron.github.io/random-quote/',
        code: 'https://github.com/ncaron/random-quote',
      },
    },
    {
      name: 'Capital Coffee',
      image: '/capitalcoffee.gif',
      icons: [
        'devicon-html5-plain colored',
        'devicon-css3-plain colored',
        'devicon-javascript-plain colored',
        'devicon-grunt-plain colored',
      ],
      links: {
        live: 'http://ncaron.github.io/Capital-Coffee/',
        code: 'https://github.com/ncaron/Capital-Coffee',
      },
    },
    {
      name: 'Get Next Line',
      image: '/getnextline.jpg',
      icons: ['devicon-c-plain colored'],
      links: {
        code: 'https://github.com/ncaron/get_next_line',
      },
    },
    {
      name: 'Fillit',
      image: '/fillit.jpg',
      icons: ['devicon-c-plain colored'],
      links: {
        code: 'https://github.com/ncaron/fillit',
      },
    },
    {
      name: 'Libft',
      image: '/libft.jpg',
      icons: ['devicon-c-plain colored'],
      links: {
        code: 'https://github.com/ncaron/libft',
      },
    },
  ],
};
