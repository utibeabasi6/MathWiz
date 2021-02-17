package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"os"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", jsonHandler)
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Printf("Defaulting to port %s", port)
	}

	log.Printf("Listening on port %s", port)
	log.Printf("Open http://localhost:%s in the browser", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), r))
}

type Article struct{
	Title string `json:"title"`
	Body  string `json:"body"`
}

func jsonHandler(w http.ResponseWriter, r *http.Request) {
	a := Article{Title: "Hello World", Body: "A hello world example in json"}
	err := json.NewEncoder(w).Encode(a)
	if err != nil{
		log.Fatal(err)
	}
}