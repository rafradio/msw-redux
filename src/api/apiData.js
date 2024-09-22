import { HttpResponse, http } from "msw";
import { setupWorker } from "msw/browser";
import { sub } from 'date-fns'
import { factory, oneOf, manyOf, primaryKey } from '@mswjs/data'
import { nanoid } from '@reduxjs/toolkit'
import { faker } from '@faker-js/faker/locale/en'

export const db = factory({
    user: {
        id: primaryKey(nanoid),
        firstName: String,
        lastName: String,
        name: String,
        username: String,
        posts: manyOf('post'),
    },
    post: {
        id: primaryKey(nanoid),
        title: String,
        date: String,
        content: String,
        reactions: oneOf('reaction'),
        user: oneOf('user'),
    },
    reaction: {
        id: primaryKey(nanoid),
        thumbsUp: Number,
        tada: Number,
        heart: Number,
        rocket: Number,
        eyes: Number,
        post: oneOf('post'),
    },
})

const createUserData = () => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
  
    return {
      firstName,
      lastName,
      name: `${firstName} ${lastName}`,
    }
  }

const createPostData = (user) => {
    return {
      title: faker.lorem.words(),
      date: faker.date.recent({ days: 3 }).toISOString(),
      user,
      content: faker.lorem.paragraphs(),
      reactions: db.reaction.create(),
    }
}

const author = db.user.create(createUserData())

for (let j = 0; j < 7; j++) {
    const newPost = createPostData(author)
    console.log("create post = ", newPost);
    db.post.create(newPost)
}

