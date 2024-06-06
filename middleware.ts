import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

const isProtectedRoute = createRouteMatcher([
  "/communities(.*)",
  "/create-post(.*)",
  "/create-user(.*)",
  "/profile(.*)",
  "/home(.*)",
  "/search(.*)",
  "/post(.*)",
]);
