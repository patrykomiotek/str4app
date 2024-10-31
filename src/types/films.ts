export type Film = {
  id: number;
  title: string;
  director: string;
  releaseDate: string;
};

export type FilmsResponse = {
  allFilms: {
    films: Film[];
  };
};
