import axios from "axios";

export default axios.create({
  baseURL: `https://api.unsplash.com`,
  headers: {
    Authorization: `Client-ID -2jryNcKIglfjibj8-7aD02k04pJL9FvKI_LM-TZ8jQ`,
  },
});
