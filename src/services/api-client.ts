import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bab2883cf5ae41f6a23832adcfc38849",
  },
});
