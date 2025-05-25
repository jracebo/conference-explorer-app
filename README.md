
# Senior React Next JS Developer
#### Code Assignment – Conference Explorer Application


#### **Author**:  
- [James Russell Acebo](https://www.linkedin.com/in/jamesrussellacebo/) as the _**developer**_.

#### About:
_This is a simple Conference Explorer App where you can browse 
  conference and see their details. 
  This aims to showcase developer's knowledge and development descisions 
  based on the project's acceptance criteria._
  
---
  
#### **Version**: 
 - 1.0

---

#### **Technologies Used:**
   - Next JS v.15
   - React v.19
   - React DOM v.19
   - GraphQL v.16
   - Apollo Client v.3
   - SASS v.1
   - **API Endpoint Used:** [**https://api.react-finland.fi/graphql**](https://api.react-finland.fi/graphql)

---

#### **File Structure:**
Based on App router pattern.

    src/
    ├── api/                             # API-related modules
    │   └── queries/
    │       └── get.ts
    │
    ├── app/                             # App directory (Next.js 13+ routing)
    │   ├── conferences/
    │   │   ├── [conferenceId]/          # Dynamic route for individual conference
    │   │   │   ├── page.tsx
    │   │   │   └── Conference.module.scss
    │   │   ├── page.tsx
    │   │   └── Conferences.module.scss
    │   ├── layout.tsx                   # App-wide layout
    │   ├── page.tsx                     # Root route
    │   └── global.css                   # Global styles
    │
    ├── components/                      # Reusable UI components
    │   ├── ConferenceCard/
    │   │   ├── ConferenceCard.tsx
    │   │   └── ConferenceCard.module.scss
    │   └── DateDisplayCard/
    │       ├── DateDisplayCard.tsx
    │       └── DateDisplay.module.scss
    │
    ├── hooks/                           # Custom React hooks
    │   ├── api/
    │   │   ├── useGetConferenceById.ts
    │   │   └── useGetConferences.ts
    │   └── features/
    │       └── useImageFallback.ts
    │
    ├── lib/                             # Core libraries and utilities
    │   └── apollo-client.ts
    │
    ├── styles/                          # Global SCSS styles
    │   ├── common.scss
    │   └── variables.scss
    │
    ├── types/                           # TypeScript types and interfaces
    │   └── types.ts
    │
    ├── constants.ts                     # Application-wide constants
    ├── env.d.ts                         # Environment variable typings
    ├── providers.tsx                    # Application context providers
    └── utils.ts                         # General utility functions

---

#### READ! **Change Notes and Development Decisions:**
  - **Packages Added:**
      - Apollo GraphQL Client
      - SASS
  - Developer added `providers.ts` to ensure that Apollo client gets passed down to layouts and
    pages without explicitly passing them via hooks, or as props.
  - Developer added `.env.d.ts` to harden type definition of .end file + to let our Typescript compiler that a .env file exists
    as part of our solution.
  - In the `next.config.ts`, developer added `sassOptions` configuration to allow `variables` and `common` stylesheets
    gets loaded on ALL sass modules without explicitly importing them.
  - In the `tsconfig.json`, developer modified the baseUrl to use `src` and paths to `*`, to make import cleaner and easier.
  - Developer used reroute from boilerplate base page to conferences page index page to make it the landing page.
---

#### Dev Setup Requirements:
   - When setting up locally, please create a **.env** file and add the following line. </br>

     `NEXT_PUBLIC_GRAPHQL_API_URI=https://api.react-finland.fi/graphql`

     > Developer decided to add .env to demonstrate experience in securing keys and important variables
       for easier switching between dev, staging or production environment use cases, but is able to
       do it via Azure Key Vault in real world.

---

#### Additional Information: 
- **Approximate Time of Development:** 4hrs and 17 mins. _(Windows automatically restarted lol)_.

#### TO REVIEWER
  - In my 9+ years of Front End Development, this project is both nostalgic and fun to develop. 
    Having the criteria of not allowing frameworks and UI libraries made it both challenging and rewarding during build time.
    I honestly used the time indicated of 1 ~ 4 hours to have realistic output and expectation. I mainly focused on acceptance criteria first
    before adding enhancements in the display. I dedicated 1 ~ 4 hours showcasing my development decisions in the code, which 
    I hope we can discuss. Whatever happens, thanks for giving me this chance to build this. Though it may not the best UI you can get with the time constraint,
    but having me in your team can be the best way of the universe for me to follow my passion in deisgning and development.
    
    Talk soon. 

