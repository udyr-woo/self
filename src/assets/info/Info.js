import self from '../img/self.png';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: ' Seong Jun',
  lastName: ' Woo',
  initials: 'SJW', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Full Stack Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🇰🇷',
      text: 'based in the Seoul, Republic of Korea',
    },
    {
      emoji: '💻',
      text: 'Full Stack Developer',
    },
    {
      emoji: '📧',
      text: '7208sjsj@gmail.com',
    },
  ],
  socials: [

  ],
  bio: "Hello! I'm Seong Jun Woo. I'm a Full Stack Developer. I studied SUNGKONGHOE UNIVERSITY(Major: Glocal IT), and also, TheJoeun Computer Academy too. I enjoy building web applications and learning new technologies. ",
  skills: {
    // you dont havew to strictly follow the 'languages', 'frameworks', 'databases', 'cloudServices', and 'tools' categories. You can add your own if you'd like.
    // but the structure should be the same, an array of strings and the key should be one word, no spaces.
    languages: ['JavaScript', 'Java', 'Python', 'HTML/CSS'],
    frameworks: [
      'React',
      'Material UI',
      'Vue',
      'Mustache',
      'Spring Boot / Legacy',
      'Bootstrap/jQuery',
    ],
    databases: ['MariaDB', 'Oracle', 'Mybatis', 'JPA'],
    cloudServices: ['AWS EC2'],
    tools: [
      'Git',
      'SVN',
    ],
  },
  hobbies: [
    {
      label: 'Boxing',
      emoji: '🥊',
    },
    {
      label: 'Reading a book',
      emoji: '📚',
    },
    {
      label: 'Watching a movie',
      emoji: '🎞️',
    },
    {
      label: 'Listening a music',
      emoji: '🎧',
    },

    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title: 'WKKL - Movie Booking Site',
      live: null, //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/udyr-woo/semi', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://bluetea.cloud/cdn/portfolio/semi.png',
    },
    {
      title: 'Fireworks - Electronic Payment Groupware',
      live: null,
      source: 'https://github.com/OhHalfmoon/firework_back',
      image: 'https://bluetea.cloud/cdn/portfolio/final.png',
    },
  ],
};
