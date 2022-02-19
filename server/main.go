package main

import (
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	port := os.Getenv("PORT")

	if port == "" {
		port = "5000"
	}

	r := gin.Default() // creates server with logger
	r.Use(cors.Default())

	r.GET("/healthcheck", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status": "healthy",
		})
	})

	r.Run(":" + port)
}
