import { type FilmsResponse } from "@apptypes/films";

type Props = {
  data: FilmsResponse;
};

export const DisplayFilms = ({ data }: Props) => {
  console.log("displayFilms", data.allFilms);
  return (
    <div>
      {data.allFilms.films.map(({ id, title, director, releaseDate }) => (
        <div key={id}>
          <h3>{title}</h3>
          <b>{director}</b>
          <b>Release: {releaseDate}</b>
          <br />
        </div>
      ))}
    </div>
  );
};
