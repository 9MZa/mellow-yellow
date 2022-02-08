# Mellow Yellow Complete Blog

Thanks for purchasing this project. This document covers the installation and use of this project. If you have any questions you can email me at bds_si@hotmail.com Thank you so much!

## Key Features

- Next.js in version 12
- Integrated with GraphCMS
- Styling with Chakra-UI
- Clean & Simple Design
- SEO metadata with `next-seo`
- Category for Post
- Fully Responsive Design
- Cross Browser Compatible with Firefox, Safari, Opera, Chrome

## GraphCMS Schema

### Post

- **Title:** String, Single line, text, Required, Title
- **Excerpt:** String, Single line, text, Required
- **Slug:** String, Slug, Required, Unique
- **Thumbnail:** Asset, Two-way reference, Required
- **Content:** RichText, Rich text, Required
- **Categories:** Category, One-way reference

### Category

- **Name:** String, Single line text, Required, Title
- **Slug:** String, Slug, Required, Unique
- **Description:** String, Single line text, Required

## Environment Variables

### API Access on GraphCMS

`Project Setting -> API Access -> Content API` Copy your Content API

Open project and create `.env.local` file in root project
`GRAHPCMS_TOKEN={YOUR_APIKEYS}`

> Make sure you already create permission.

## Install package

1. First go-to in project folder
2. run `yarn install` on project folder
3. run `yarn dev` on project folder

## Deployment

1. Upload your project into github/gitlab or bitbucket. Make this project private or public whatever you want.
2. Goto Vercel.com and login your account
3. New Project Select your project repository from github/gitlab
4. Add `PROJECT NAME` and `DEPLOY`

## Webhook

## Source and Credit

- [Nextjs](https://nextjs.org/)
- [Chakra-UI](https://chakra-ui.com/)
- [Unsplash](https://unsplash.com/)
- [unDraw](https://undraw.co/)
- [IonicIcon](https://ionic.io/ionicons)
