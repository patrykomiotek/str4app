import { useDispatch } from "react-redux";
import { type FilmsResponse } from "@apptypes/films";
import { fetchFilmById } from "@features/films/filmsSlice";

type Props = {
  data: FilmsResponse;
};

export const DisplayFilms = ({ data }: Props) => {
  const dispatch = useDispatch();

  const handleClick = (filmId: number) => {
    dispatch(fetchFilmById(2));
    // dispatch(fetchFilmById(filmId));
  };

  console.log("displayFilms", data.allFilms);
  return (
    <div>
      {data.allFilms.films.map(({ id, title, director, releaseDate }) => (
        <div key={id}>
          <h3
            onClick={() => handleClick(id)}
            className="cursor-pointer 3xl font-semibold"
          >
            {title}
          </h3>
          <p>{director}</p>
          <p>Release: {releaseDate}</p>
          <br />
        </div>
      ))}
    </div>
  );
};
