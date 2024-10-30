// import { gql } from "@apollo/client";
import { gql } from "graphql-tag";

export const GET_LOCATIONS = gql`
  query Locations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export const GET_BOOKS = gql`
  query Books {
    books {
      id
      author
      title
    }
  }
`;

export const GET_FILMS = gql`
  query AllFilms {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`;
