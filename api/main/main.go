package api

import (
	"fmt"
	"github.com/gorilla/mux"
	"net/http"
)

func API(w http.ResponseWriter, r *http.Request) {
	router := mux.NewRouter()
	router.ServeHTTP(w, r)
	fmt.Println("vim-go")
}
