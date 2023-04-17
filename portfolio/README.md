This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```



### Create a project based on next.js typescript


```bASH
npx create-next-app --typescript 
```


### Install tailwindcss
```link https://tailwindcss.com/docs/guides/nextjs ```


```BASH
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```



#### Open tailwind.config.js

Add this content to your module.exports


```JS
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
}
```


#### Open your global.css
Delete all global css and add this css
```CSS
@tailwind base;
@tailwind components;
@tailwind utilities;

body{
    @apply bg-[#DDD0C8] h-full overflow-hidden;
}

#__next{
    @apply h-full;
}

html{
    @apply h-full;
}
```


#### Prisma
```bash
npm install -D prisma
npx prisma init


npm install @prisma/client
```

After this, its gonna create a initial prisma file with name schema.prisma

after this u can create your schema db

now you need to export to mongo db using the bellow command

```bash 
npx prisma db push 
```


#### Next auth

```Bash
npm install next-auth
npm install bcrypt
```


#### REQUEST HTTP AXIOS

```BASH
npm install axios
```

#### React-icons -> For icons like google and github
```BASH 
 npm install react-icons
```

#### Google and Github authentication

create 2 vars on .env file.


GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

after this we go to [...nextauth].ts file and add the new vars created before and connect to prismadb.

after that we install the prisma-adapter

```bash
npm install @next-auth/prisma-adapter
```



### Notes about the implementation

#### ABOUT CSS 

##### Colors 
background - ```css bg-[#DDD0C8] ```
input - ```css bg-[#c4bcb6] ```
text-input - ```css  text-zinc-700 ```
hover - ```css hover:bg-[#979390] ```
##### Styling based on sibling state (peer-{modifier})
when you need to style an element based on the state of a sibling element, mark the sibling with the `peer` class, and use `peer-*` modifiers like `peer'invalid` to style the target element.

###### TypeWrite Effect

 ```Bash
npm i typewriter-effect
 ```

##### Prisma Schema 


the account model and its fields are needed for the signIn robots. Without it, when you log in through Google, there will be errors in the console that will say that some properties are missing.

If u gonna implement a different db besides 'postgresql', don't forget to change that on schema.prisma file.
For example:
###### Default
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```
###### Changed to mongodb (db we are using)
```prisma
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
```
Because of next.js preloading, for example when every code change, our code updates and reload. 
That effects prisma.
Prisma creates a bunch of new Prisma client instance and then you will get an error saying 'too much prisma client instance'.

For get away of this error, we create a global file (witch is not effect by next.js preloading) and implements a function to create new prisma client.  
We first create a new file with name for example -> prismadb.ts
```ts
import { PrismaClient } from '@prisma/client';

const client = global.prismadb || new PrismaClient();

if(process.env.NODE_ENV == 'production') global.prismadb = client;

export default client;
```

We need to create after that a new file with name global.d.ts.
where we gonna insert this declare: 
```ts
import { PrismaClient } from '@prisma/client';

declare global {
    namespace globalThis {
        var prismadb: PrismaClient
    }
}
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
