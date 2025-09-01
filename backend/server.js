import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import http from 'http';

// Routes
import adminRoutes from "./routes/admin.route.js";
import dishRoutes from "./routes/dish.route.js";

const port = process.env.SERVER_PORT || 3001;
const allowedOrigins = [`http://192.168.0.17:${port}`, `http://localhost:${port}`];

const corsOptions = {
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
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use("/", adminRoutes);
app.use("/", dishRoutes);

const server = http.createServer(app);
server.listen(port, "0.0.0.0", () => {
  console.log(`Server running in http://localhost:${port}`);
});
