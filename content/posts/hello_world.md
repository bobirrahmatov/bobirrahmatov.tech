---
title: 'Hello World'
slug: 'hello-world'
date: '2022-02-25'
thumbnail: '/thumbnails/code.png'
tag: 'others'
canonicalUrl: 'https://bobirrahmatov.tech/blog/hello-world'
---

##  ๐คจ What is this?

This is my new personal website, built from the scratch with a whole new tech stack that I chose based on what I have been learning & using over the past few months / years.

So, with the amount of work that went into building my personal website but with a different look & different tech stack and features, I thought now this would be a good change to show some of them off.

## โ Why

In short, it was long overdue. I usually try to create small web apps and websites on Netlify, Heroku and Vercel to experiment, try new tech, new ideas, etc. However, since 2021, I kept delaying it, putting it off & just never doing it. But as of late I had a burst of motivation to get it done & launched. Therefore, having been a few months since the last small project, I decided to do everything from the scratch and use the new tech stack I have been learning and using for the past few months to see what I could do. 

## ๐จ Tech Stack

Each piece of technology used in this [website](https://bobirrahmatov.tech) is below. I believe this is one of the best stacks there is to build websites of any size and domain.

- โ๏ธ [React](https://reactjs.org/) / [Preact](https://preactjs.com/) (Web language of choice)
-  ๐ช [Next.js](https://nextjs.org/)
    - ๐ [next-seo](https://github.com/garmeeh/next-seo)
    - ๐ [next-themes](https://github.com/pacocoursey/next-themes)
- ๐ [CSS Framework](https://chakra-ui.com/)
- ๐ผ [next-mdx-remote ](https://github.com/hashicorp/next-mdx-remote/) (I use next-mdx-remote for my blog. Posts are stored in mdx files and pre-rendered)
- ๐  [Vercel & Vercel Domains](https://vercel.com/dashboard/) (I use Vercel to deploy my app. It's free, fast, integrates with GitHub, and overall a great experience. My domain name is bought and stored through Vercel Domains.)
- ๐ [react-use](https://github.com/streamich/react-use)

## โญ Features

One interesting feature that the next/image component provides is the placeholder prop, whose values can be either blur or empty. Thanks to [Lazar Nikolov](https://nikolovlazar.com/blog/generating-blur-for-dynamic-images-nextjs), using this method helped me to create the blog slug and generating blurDataURL for remote images in Next.js

One of the main important part is to register the domain as below:

```js
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['i.imgur.com'],
    // next/image support `srcSet` using the below deviceSizes
    // for more info, visit https://nextjs.org/docs/basic-features/image-optimization#device-sizes
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // https://nextjs.org/docs/basic-features/image-optimization#image-sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],    
  },
  typescript: {
    ignoreBuildErrors: true,
  }

};
```

### ๐ Blog

As you can tell by the fact you are now reading this, I now have a blog ๐

This means that I finally have a place to write lengthy articles that can go more in-depth on topics I am really curious about, ranging from the usual softwares to machine learning. 

### ๐ Projects

My new [projects page](/projects) has been redesigned to use server-side rendering for a very unique purpose.
The page will show a number of projects that are publicly available on my GitHub repo. But, the way they are selected is very unique.

## ๐ฅ Conclusion

Thatโs the final result of the website that you are currently visiting. I hope you enjoyed reading this post.

Happy Coding!
