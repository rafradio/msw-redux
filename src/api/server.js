import { HttpResponse, http } from "msw";
import { setupWorker } from "msw/browser";
import { sub } from 'date-fns'
import { factory, oneOf, manyOf, primaryKey } from '@mswjs/data'
import { nanoid } from '@reduxjs/toolkit'
import { faker } from '@faker-js/faker/locale/en'
import { db } from "./apiData";

// response resolver
const postsResolver1 = async () => {
    const posts = db.post.getAll()
    return HttpResponse.json(posts)
}

const postsResolver = async () => {
  return HttpResponse.json([
    {
        id: '4',
        title: 'Thirth Post четвертый!',
        user: '1',
        content: 'Good Buy!',
        date: sub(new Date(), { minutes: 3 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            tada: 0,
            heart: 0,
            rocket: 0,
            eyes: 0
        },
    },
    {
        id: '5',
        title: 'Firth Post пятый!',
        user: '2',
        content: 'New York',
        date: sub(new Date(), { minutes: 2 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            tada: 0,
            heart: 0,
            rocket: 0,
            eyes: 0
        },
    },
  ]);
};



// request resolver
const postsHandler = http.get("/api/posts", postsResolver);

const postsHandler1 = http.get("/api/db", postsResolver1);

const handlers = [postsHandler, postsHandler1];

export const worker = setupWorker(...handlers);