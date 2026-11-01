import type { BlogPost } from "./types";
import { classroomPosts } from "./posts-classroom";
import { generalPosts } from "./posts-general";

export type { BlogPost, Block } from "./types";

/** Newest first. */
export const posts: BlogPost[] = [...classroomPosts, ...generalPosts].sort((a, b) => b.published.localeCompare(a.published));

export const POSTS_PER_PAGE = 12;

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function paginate(page: number) {
  const pages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  return { pages, items: posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE) };
}
