/*
DEV NOTE:
 - Adding end.d.ts will allow Typescript to know the existense of our .env file.
   Can safely pull variable paths and values there.
 - For Type Safety of course.
*/

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_GRAPHQL_API_URI: string;
  }
}