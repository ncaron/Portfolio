export interface Job {
  company: string;
  dates: {
    from: string;
    to: string;
  };
  description: string;
  image: string;
  link: string;
  position: string;
}

export const employment: Job[] = [
  {
    company: 'Matterway',
    dates: {
      from: 'March 2018',
      to: 'February 2021',
    },
    description: `Matterway helps employees be more productive.\n
    We do it by simplifying the applications they use at work, to make them more like the applications they use in their personal lives.\nMy role was the use our own inHouse Studio with technologies such as JavaScript, TypeScript, React Native and Node to build iOS/Android/Desktop apps to help.`,
    image: '/matterway.jpg',
    link: 'https://www.matterway.io',
    position: 'Customer Success JavaScript Engineer',
  },
  {
    company: 'Matterway',
    dates: {
      from: 'February 2021',
      to: 'Present',
    },
    description: `After 3 years in the customer success team, I was promoted to join a team of senior engineers to work on the product that will shape the company's future and support the customer success team.\nSome of the tools used to achieve this are TypeScript, React, Node, WebSockets. We are not afraid to experiment to find the right tool for the job including Python and Go.`,
    image: '/matterway.jpg',
    link: 'https://www.matterway.io',
    position: 'JavaScript Engineer',
  },
];
