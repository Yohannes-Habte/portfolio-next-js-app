# Next.js Project

## Pages

The pages are placed inside the app folder. The page file must be written us page.js/page.jsx

## Dynamic pages

For dynamic pages, you can use square bracket => [slug]

## Group pages T

To group pages, you can use parenthesis => (auth)

## children in layout

The children in the layout.js represents pages layout of the app or website.

In addition, it is possible to create a layout.js for each page, in its folder

## Components

The components should be placed inside the src folder.
Each file should have its folder and the file must be start with capital letter as react. For instance, Navbar.jsx

## Loading

create loading.jsx file in the app folder that could be used for all pages.

It is also possible to create a loading.jsx file for each page

## Error

create error.jsx file in the app folder that could be used for all pages.

It is also possible to create a error.jsx file for each page

Add the "use client" directive on the top of the file to resolve the

## Adding Image Link

Got to next.config.mjs file. and then add this code =>
images: {
remotePatterns: [
{
protocol: 'https',
hostname: "cdn.britannica.com"
}
]
}

hostname represents the domain

## SEO
Search engine optimization could be done using the layout.js file, specifically metadata.

Hence, to optimize the search engine, you need to handle the title and description values using the keywords.

This metadata applies to each and every page of the project

## Server
When you are in the server side, you need to include;
1. "use server"
2. async for the function

## Auth
1. Please open the link https://authjs.dev/getting-started website
2. Open API References
3. Select next-auth
4. open next-auth documentation 
5. npm install next-auth@beta
6. AUTH_SECRET and AUTH_URL have to be included in the .env file
7. create auth.js file under the database folder called lib folder
8. then import 
    1. import NextAuth from "next-auth"
    2. import GitHub from "next-auth/providers/github"
    3. export const { handlers, auth } = NextAuth({ providers: [ GitHub ] })
9. fs


## Generate random password 
To generate random password, you need to run openssl rand -base64 32 in the terminal
1. openssl rand -base64 32

## Github
1. open github account 
2. Click on settings
3. Click on Developer settings
4. Click on OAuth Apps
5. Click on Register a new application 
6. Give Application name (e.g. next14 portfolio)
7. Homepage URL (e.g. http://localhost:3000)
8. Authorization callback URL (e.g. http://localhost:3000/api/auth/callback/github)
9. Click on Register Application
10. Store the Client ID and Client secrets in env file 

## How to handle error
Open the react documentation website using this linek: https://react.dev/learn 

got to useFormStatus

useFormStatus is a Hook that gives you status information of the last form submission.

const { pending, data, method, action } = useFormStatus();
