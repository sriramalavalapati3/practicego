package main

import "fmt"

const age = 25

func main() {
	const name = "Sriram"
	fmt.Printf("%s is %d years old \n", name, age)

	const (
		className = "Class A"
		grade     = 10
	)

	fmt.Printf("%s is in grade %d\n", className, grade)
}
