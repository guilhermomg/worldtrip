import { createServer, Model } from "miragejs";

export function makeServer() {
  let server = createServer({
    environment: "test",
    models: {
      continent: Model,
    },
    seeds(server) {
      server.db.loadData({
        continents: [
          {
            id: 1,
            slug: "europa",
            name: "Europa",
            description: "O continente mais antigo",
            carrouselImage: "/continents/europa/carousel-europa.png",
          },
        ],
      });
    },
    routes() {
      this.get("/api/continents", () => {
        return this.schema.all("continent");
      });

      this.get("/api/movies", () => ({
        movies: [
          { id: 1, name: "Inception", year: 2010 },
          { id: 2, name: "Interstellar", year: 2014 },
          { id: 3, name: "Dunkirk", year: 2017 },
        ],
      }));
    },
  });

  return server;
}
