import React from "react";
import { useQuery } from "@apollo/client";

import { GET_BOOKS, GET_LOCATIONS } from "../gql/Queries";
// import { GET_LOCATIONS } from "../gql/Queries";

interface Book {
  id: number;
  title: string;
  author: string;
}

interface BooksResponse {
  books: Book[];
}

interface Location {
  id: number;
  name: string;
  description: string;
  photo: string;
}

interface LocationsResponse {
  locations: Location[];
}

export const DisplayBooks = () => {
  const { loading, error, data } = useQuery<BooksResponse>(GET_BOOKS);
  const { loading: locationData, error: locationError, data: Error } = useQuery<
    LocationsResponse
  >(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      {data?.books.map(({ id, title, author }) => (
        <div key={id}>
          <h3>{title}</h3>
          <b>{author}</b>
          <br />
        </div>
      ))}
    </div>
  );
};
