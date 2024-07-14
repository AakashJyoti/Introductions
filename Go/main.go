package main

import "fmt"

const age = 57

func main() {
	fmt.Println("Hello mom")

	// Simple values

	// int
	fmt.Println(1 + 1)
	// string
	fmt.Println("Hello there")
	// bool
	fmt.Println(true)
	// floats
	fmt.Println(10.5)

	// Variables

	// var name string = "Astr"
	// var name = "Astr"
	name := "Astr"

	fmt.Println(name)

	// age = 14 // not allowed
	fmt.Println(age)

	const (
		port = 5000
		host = "localhost"
	)

	fmt.Println(host)
	fmt.Println(port)
}
