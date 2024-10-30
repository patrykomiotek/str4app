import { GET_FILMS } from "../gql/Queries";

export const getFilms = [
  {
    request: {
      query: GET_FILMS,
    },
    result: {
      data: {
        allFilms: {
          films: [
            {
              id: 1,
              title: "First movie",
              director: "John Kowalsky",
              releaseDate: "2024-10-30",
            },
          ],
        },
      },
    },
  },
];
