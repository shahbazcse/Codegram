import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Shahbaz",
    lastName: "Ahmad",
    username: "shahbazcse",
    password: "shahbaz123",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    username: "john",
    password: "john123",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Tony",
    lastName: "Stark",
    username: "tony",
    password: "tony123",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Steve",
    lastName: "Rogers",
    username: "steve",
    password: "steve123",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Loki",
    lastName: "Odinson",
    username: "loki",
    password: "loki123",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Bruce",
    lastName: "Wayne",
    username: "bruce",
    password: "bruce123",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
