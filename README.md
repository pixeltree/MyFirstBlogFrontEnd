This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This app requires the back end set up and running. Once you've set up the back end, continue with the instructions.

First, install the npm dependencies using the command line and running the following inside the 'MyFirstBlogFrontEnd' directory:

```bash
npm install
```

Next, create a new file named `.env.local` and copy the contents of the  `.env.local.example` file into it. We'll be filling in the missing entries throughout this setup.

Ensure the backend server is running.

Then, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

You can start editing the page by modifying `pages/index.js`. The page will automatically update as you edit the file.

### Authentication

#### Auth0 project setup
To enable authentication, create an account with [Auth0](https://auth0.com/). 
Once you've logged in and have set up a default app:
1. Once the default app has been created, create a new single page app
2. Navigate to applications in the sidebar and then go to the new app you just created
3. Navigate to the settings tab of the application
4. Fill in your `.env.local` file with the tokens found on the settings page
    * `REPLACE_WITH_AUTH0_TENANT` should be replaced with the `Domain` value from the settings page
    * `REPLACE_WITH_AUTH0_CLIENT_ID` should be replaced with the `Client ID`
    * `REPLACE_WITH_AUTH0_SECRET` should be replaced with the `Client Secret`
5. Add `http://localhost:3000` to the following in the auth0 application settings dashboard:
    1. `Allowed Callback URLs`
    2. `Allowed Logout URLs`
    3. `Allowed Web Origins`
    4. `Allowed Origins (CORS)`
6. Save the changes to the auth0 application
7. Test by starting up the server using `npm run dev`, navigating to [http://localhost:3000](http://localhost:3000), clicking the login button, and signing up as a new user

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

To learn more about the technologies used in this site, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [MDX](https://mdxjs.com) - the MDX documentation
- [Auth0](https://auth0.com/docs/) - the Auth0 documentation
