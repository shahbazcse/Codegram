import { Response } from "miragejs";
import dayjsRandom from "dayjs-random";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";

dayjs.extend(dayjsRandom);

export const requiresAuth = function (request) {
  const encodedToken = request.requestHeaders.authorization;
  const decodedToken = jwt_decode(
    encodedToken,
    process.env.REACT_APP_JWT_SECRET
  );
  if (decodedToken) {
    const user = this.db.users.findBy({ username: decodedToken.username });
    return user;
  }
  return new Response(
    401,
    {},
    { errors: ["The token is invalid. Unauthorized access error."] }
  );
};

export const formatDate = () =>
  dayjs.between("2020-06-10", "2023-06-23").format("YYYY-MM-DD");

export const now = () => dayjs().format("YYYY-MM-DD");
