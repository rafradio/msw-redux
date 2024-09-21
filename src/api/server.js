import { HttpResponse, http } from "msw";
import { setupWorker } from "msw/browser";
import { sub } from 'date-fns'

// response resolver
const postsResolver = () => {
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

const handlers = [postsHandler];

export const worker = setupWorker(...handlers);