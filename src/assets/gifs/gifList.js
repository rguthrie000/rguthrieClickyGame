export default function gifList() {
    const imgObjs = 
      [
        {imgId:  0, url: 'https://media.giphy.com/media/kga6OcqW0CNdfbEHwy/giphy.gif'},
        {imgId:  1, url: 'https://media.giphy.com/media/QYpAz3np7ZMQlFMjlr/giphy.gif'},
        {imgId:  2, url: 'https://media.giphy.com/media/C8QW6IwBG9JMw0mFMX/giphy.gif'},
        {imgId:  3, url: 'https://media.giphy.com/media/AbL4XUXPX5MCA/giphy.gif'},
        {imgId:  4, url: 'https://media.giphy.com/media/3oEjHYdoXUnkbUN8QM/giphy.gif'},
        {imgId:  5, url: 'https://media.giphy.com/media/l0HlP0xdc6XSsmVoY/giphy.gif'},
        {imgId:  6, url: 'https://media.giphy.com/media/3ornkdVFIaIkMrnkIg/giphy.gif'},
        {imgId:  7, url: 'https://media.giphy.com/media/l46CA5eAtDMx4wiS4/giphy.gif'},
        {imgId:  8, url: 'https://media.giphy.com/media/l2QZYm04iCcRWQT3a/giphy.gif'},
        {imgId:  9, url: 'https://media.giphy.com/media/1ppubJh9F6dNI5aN8I/giphy.gif'},
        {imgId: 10, url: 'https://media.giphy.com/media/JRUufaC837hSM/giphy.gif'},
        {imgId: 11, url: 'https://media.giphy.com/media/NXLQDhOln6BjO/giphy.gif'},
        {imgId: 12, url: 'https://media.giphy.com/media/l2QDUBwQTbStYGeoE/giphy.gif'},
        {imgId: 13, url: 'https://media.giphy.com/media/gFB8ATae8KABG/giphy.gif'},
        {imgId: 14, url: 'https://media.giphy.com/media/WZrOaNjFPKT5e/giphy.gif'},
        {imgId: 15, url: 'https://media.giphy.com/media/SCST7tMXzStsA/giphy.gif'},
        {imgId: 16, url: 'https://media.giphy.com/media/HNh4gzTjX7ji0/giphy.gif'},
        {imgId: 17, url: 'https://media.giphy.com/media/3o7TKwDwEn02BIx9SM/giphy.gif'},
        {imgId: 18, url: 'https://media.giphy.com/media/w1L6heWepUxVu/giphy.gif'},
        {imgId: 19, url: 'https://media.giphy.com/media/l46CykJO7szNczcv6/giphy.gif'},
        {imgId: 20, url: 'https://media.giphy.com/media/15btFYb0r9w0432u1I/giphy.gif'},
        {imgId: 21, url: 'https://media.giphy.com/media/65BYoRKaL6oZDHRxxv/giphy.gif'},
        {imgId: 22, url: 'https://media.giphy.com/media/Schz2qbHpfEAM/giphy.gif'},
        {imgId: 23, url: 'https://media.giphy.com/media/ToMjGpRJkXEhjXj1Ttm/giphy.gif'},
        {imgId: 24, url: 'https://media.giphy.com/media/ToMjGpqo37GHUEsTHEs/giphy.gif'},
        {imgId: 25, url: 'https://media.giphy.com/media/63vcx7CRkf7QA/giphy.gif'},
        {imgId: 26, url: 'https://media.giphy.com/media/WO2UgpZpVA47K/giphy.gif'},
        {imgId: 27, url: 'https://media.giphy.com/media/NVlmPgRXhCmJ2/giphy.gif'},
        {imgId: 28, url: 'https://media.giphy.com/media/H45KzcnMyIhtS/giphy.gif'},
        {imgId: 29, url: 'https://media.giphy.com/media/5UJpu1HeOOBcE0JILD/giphy.gif'},
        {imgId: 30, url: 'https://media.giphy.com/media/3o7qDFGP1vAQZUPoys/giphy.gif'},
        {imgId: 31, url: 'https://media.giphy.com/media/5UJpu1HeOOBcE0JILD/giphy.gif'},
        {imgId: 32, url: 'https://media.giphy.com/media/kA1nC94OFuN9K/giphy.gif'},
        {imgId: 33, url: 'https://media.giphy.com/media/xUOrwmaxrw9BMqzIBi/giphy.gif'},
        {imgId: 34, url: 'https://media.giphy.com/media/SbtS2SVvmaKV807aK1/giphy.gif'},
        {imgId: 35, url: 'https://media.giphy.com/media/Fnicg9msA6z3G/giphy.gif'},
        {imgId: 36, url: 'https://media.giphy.com/media/g0KmfNe0EcRkxSJlzl/giphy.gif'},
        {imgId: 37, url: 'https://media.giphy.com/media/2sdMbiLO5Z6RboF4Ih/giphy.gif'},
        {imgId: 38, url: 'https://media.giphy.com/media/3o6ZsX9ogGeqIlfH20/giphy.gif'},
        {imgId: 39, url: 'https://media.giphy.com/media/3ov9jRdUC1G5oKYNRC/giphy.gif'},
        {imgId: 40, url: 'https://media.giphy.com/media/l378hKTzkbO4YuHBe/giphy.gif'},
        {imgId: 41, url: 'https://media.giphy.com/media/l378ch0v3DzMUGm52/giphy.gif'},
        {imgId: 42, url: 'https://media.giphy.com/media/l378h34GXL6h2G3du/giphy.gif'},
        {imgId: 43, url: 'https://media.giphy.com/media/3ov9jMNPIZOC3QUEQE/giphy.gif'},
        {imgId: 44, url: 'https://media.giphy.com/media/l41lNx6qN1EB1jh9S/giphy.gif'},
        {imgId: 45, url: 'https://media.giphy.com/media/3ov9jUhsxCjtml94AM/giphy.gif'},
        {imgId: 46, url: 'https://media.giphy.com/media/26vIfLSKzDoWwVqh2/giphy.gif'},
        {imgId: 47, url: 'https://media.giphy.com/media/l378kzDK8wL2FPk9a/giphy.gif'},
        {imgId: 48, url: 'https://media.giphy.com/media/26vIfQgWfC7hxebLO/giphy.gif'},
        {imgId: 49, url: 'https://media.giphy.com/media/l378eg9i9q60bCNC8/giphy.gif'},
        {imgId: 50, url: 'https://media.giphy.com/media/3ov9jKCkB6Kb2LMxva/giphy.gif'},
        {imgId: 51, url: 'https://media.giphy.com/media/l0MYuBOUE97B1UNSU/giphy.gif'},
        {imgId: 52, url: 'https://media.giphy.com/media/l378vNYx3Y4YmAKiI/giphy.gif'}
    ];
  return(imgObjs);  
};


