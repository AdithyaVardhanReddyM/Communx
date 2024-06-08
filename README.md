# Communx

<div align="center">
  <br />
    <a href="" target="_blank">
      <img width="1274" alt="Screenshot 2024-06-08 at 9 31 53 AM" src="https://github.com/AdithyaVardhanReddyM/Communx/assets/127095306/06095c6a-cab9-44b2-9d36-f5516d660d3d">
    </a>
  <br />
</div>

# Live Site - https://communx.vercel.app/

## 📋 <a name="table">Table of Contents</a>

1. 💻 [Tech Stack](#tech-stack)
2. 🤖 [Introduction](#introduction)
3. 📚 [Features](#features)
4. 🧑‍💻 [Set up locally](#quick-start)

## <a name="tech-stack">💻 Tech Stack</a>

<div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
  <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="mongodb" />
    <img src="https://img.shields.io/badge/-Mongoose-black?style=for-the-badge&logoColor=white&logo=mongoose&color=red" alt="mongodb" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Clerk-black?style=for-the-badge&logoColor=white&logo=clerk&color=6C47FF" alt="clerk" />
    <img src="https://img.shields.io/badge/-Shadcn_UI-black?style=for-the-badge&logoColor=white&logo=shadcnui&color=000000" alt="shadcnui" />
    <img src="https://img.shields.io/badge/-Zod-black?style=for-the-badge&logoColor=white&logo=zod&color=3E67B1" alt="zod" />
  </div>

## <a name="introduction">🤖 Introduction</a>

Communx is a social media platform designed to foster community engagement and global connectivity. Users can create and join various communities centered around shared interests, hobbies, or causes. Within these communities, users can post content, share updates, and engage in discussions relevant to the community's focus. Additionally, Communx allows users to share posts globally, reaching a broader audience.

## <a name="features">📚 Features</a>

- **Community Creation:** Users can create and join communities based on shared interests, hobbies, or causes.
- **Community-Specific Posts:** Engage in discussions and share updates within specific communities.
- **Global Posting:** Share content globally to reach a wider audience beyond individual communities.
- **Next.js Server Actions:** Efficient server-side rendering and actions for enhanced performance.
- **Mongoose ORM:** Seamless data modeling and management with MongoDB.
- **MongoDB:** Robust and scalable database for storing user and community data.
- **TypeScript:** Ensures type safety and reduces runtime errors during development.
- **Clerk for Authentication:** Secure and streamlined user authentication and management.
- **Zod for Schema Validation:** Validates and ensures data integrity with schema definitions.

## <a name="quick-start">🧑‍💻 Set up locally</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/AdithyaVardhanReddyM/Communx.git
cd communx
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_CLERK_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=


DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

MONGODB_URL= 
```

Replace the placeholder values with your actual credentials. 
**Running the Project**

```bash
npm run dev
```
