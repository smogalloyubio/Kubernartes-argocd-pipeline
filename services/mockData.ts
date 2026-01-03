import { Movie, Genre } from "../types";

const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const makeMovie = (genre: Genre, idx: number): Movie => {
  const seed = `${genre}-${idx}`.replace(/\s+/g, "-");
  const id = `${genre.replace(/\s+/g, "-")}-${idx}`;
  return {
    id,
    title: `${genre} Movie ${idx + 1}`,
    overview: `A gripping ${genre} story about unexpected events and larger-than-life characters. Perfect for fans of ${genre} tales.`,
    backdrop_path: `https://picsum.photos/seed/${encodeURIComponent(seed)}-backdrop/1280/720`,
    poster_path: `https://picsum.photos/seed/${encodeURIComponent(seed)}-poster/500/750`,
    vote_average: Number((Math.random() * 4 + 6).toFixed(1)), // 6.0 - 10.0
    release_date: `${rand(2010, 2024)}-${String(rand(1,12)).padStart(2,'0')}-${String(rand(1,28)).padStart(2,'0')}`,
    genre_ids: [rand(1, 20)],
  };
};

export const mockMoviesByGenre = (genre: Genre): Movie[] => {
  return Array.from({ length: 10 }).map((_, i) => makeMovie(genre, i));
};

export const mockAllRows = (): { title: Genre; movies: Movie[] }[] => {
  const genres = Object.values(Genre) as Genre[];
  return genres.map((g) => ({ title: g, movies: mockMoviesByGenre(g) }));
};
