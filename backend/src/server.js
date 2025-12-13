import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import router from "./routes.js";
const port = process.env.PORT || 3001;
const allowedOrigins = [
  "http://localhost:5173", // dev en PC
  "http://192.168.0.10:5173", // dev en PC desde otra máquina
  "http://192.168.0.10", // móvil accediendo al backend;
];
/* const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET, POST, PUT, DELETE",
  optionsSuccessStatus: 200,
  credentials: true,
}; */

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api", router);

//app.use(cors(corsOptions));
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
