package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

// define an upgrader to convert HTTP connections to WS
var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,

	CheckOrigin: func(r *http.Request) bool {
		// validate that the request comes from out frontend
		// anything is okay for now
		return true
	},
}

func main() {
	fmt.Println("Golang and React Chat Application")

	makeRoutes()
	http.ListenAndServe(":80", nil)

}

// routes for handling http traffic
func makeRoutes() {
	// send them to the frontend
	http.HandleFunc("/", func(rw http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(rw, "Server started")
	})

	http.HandleFunc("/ws", makeWS)
}

// build and convert the ws connection
func makeWS(rw http.ResponseWriter, r *http.Request) {
	fmt.Println(r.Host)

	ws, err := upgrader.Upgrade(rw, r, nil)
	if err != nil {
		log.Println(err)
		return
	}

	websocketReader(ws)
}

// parse messages
func websocketReader(c *websocket.Conn) {
	for {
		t, m, err := c.ReadMessage()

		if err != nil {
			log.Println(err)
			return
		}

		fmt.Println(string(m))

		if err := c.WriteMessage(t, m); err != nil {
			log.Println(err)
			return
		}
	}
}
