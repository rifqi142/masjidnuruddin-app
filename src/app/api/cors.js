// pages/api/cors.js

import Cors from "cors";

const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default cors;
