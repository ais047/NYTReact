import axios from "axios";

const API = {
  // Retrieves all quotes from the db
  getQuotes: function() {
    return axios.get("/api/quotes");
  },
  // Saves a new quote to the db
  saveQuote: function(text) {
    return axios.post("/api/quotes", { text });
  },
  // Deletes a quote from the db
  deleteQuote: function(id) {
    return axios.delete(`/api/quotes/${id}`);
  },
  // Toggles a quote's favorite property in the db
  favoriteQuote: function(quote) {
    quote.favorited = !quote.favorited;
    const { _id, favorited } = quote;
    return axios.patch(`/api/quotes/${_id}`, { favorited });
  },
  searchArticle: function(query, start, end){
    const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    let queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q="
    + query;
    if(start !== ""){
      queryURLBase += "&begin_date=" + start;
    };
    if(end !== ""){
      queryURLBase += "&end_date=" + end;
    };
    console.log(queryURLBase);

    return axios.get(queryURLBase);

  },
  getArticle: function(){
    return axios.get("/api/save")
  },
  saveArticle: function(body){
    return axios.post("/api/save", body)
  },
  deleteArticle: function(id){
    return axios.delete("/api/save/${id}")
  }

};

export default API;
