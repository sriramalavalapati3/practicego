// main.go
package main

import (
	"bufio"
	"fmt"
	"os"
	"student-management/student"
	"time"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	fmt.Print("Enter class name (e.g., classA): ")
	scanner.Scan()
	classInput := scanner.Text()
	classFile := classInput + ".xlsx"

	// Load data from Excel or create if not present
	student.LoadFromExcel(classFile, classInput)

	for {
		fmt.Println("\nStudent Management System")
		fmt.Println("1. Add Student")
		fmt.Println("2. Display All Students")
		fmt.Println("3. Exit")
		fmt.Print("Enter your choice: ")

		var choice int
		fmt.Scan(&choice)

		switch choice {
		case 1:
			start := time.Now()
			student.AddStudent(scanner, classFile, classInput)
			student.WriteToExcel(classFile, classInput)
			fmt.Println("Execution Time:", time.Since(start))
		case 2:
			start := time.Now()
			student.DisplayStudents()
			fmt.Println("Execution Time:", time.Since(start))
		case 3:
			fmt.Println("Exiting...")
			return
		default:
			fmt.Println("Invalid choice. Please try again.")
		}
	}
}
