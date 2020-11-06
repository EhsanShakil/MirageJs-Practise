import { createServer } from "miragejs";

export const MirageServer = () => {
  const arr = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Henry" },
  ];
  createServer({
    routes() {
      this.namespace = "api";
      this.get("/data", { data: arr });
      this.post("/addData", (_, req) => {
        arr.push(req.requestBody);
      });
    },
  });
};
