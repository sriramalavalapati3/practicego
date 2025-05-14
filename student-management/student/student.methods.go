// student/student.go
package student

import (
	"bufio"
	"fmt"
	"strconv"
	"time"

	"github.com/xuri/excelize/v2"
)

// Student struct represents a student record
// with auto-generated ID and basic details.
type Student struct {
	ID      int
	Name    string
	Grade   float64
	Phone   string
	Address string
}

var students []Student // Slice to store student data in memory
var lastID int         // To keep track of the latest used student ID

// LoadFromExcel loads student data from an Excel file by class name.
// If the file or class sheet does not exist, it creates a new sheet with headers.
func LoadFromExcel(filename, className string) {
	start := time.Now()
	f, err := excelize.OpenFile(filename)
	if err != nil {
		fmt.Println("Excel file not found, creating new one.")
		f = excelize.NewFile()
		f.SetSheetName("Sheet1", className)
	}
	if index, err := f.GetSheetIndex(className); err != nil || index == -1 {
		f.NewSheet(className)
		headers := []string{"ID", "Name", "Grade", "Phone", "Address"}
		for i, h := range headers {
			f.SetCellValue(className, fmt.Sprintf("%c1", 'A'+i), h)
		}
		f.SaveAs(filename)
		fmt.Println("LoadFromExcel Execution Time:", time.Since(start))
		return
	}
	rows, err := f.GetRows(className)
	if err != nil || len(rows) < 2 {
		fmt.Println("LoadFromExcel Execution Time:", time.Since(start))
		return
	}
	for _, row := range rows[1:] {
		if len(row) < 5 {
			continue
		}
		id, _ := strconv.Atoi(row[0])
		grade, _ := strconv.ParseFloat(row[2], 64)
		students = append(students, Student{
			ID:      id,
			Name:    row[1],
			Grade:   grade,
			Phone:   row[3],
			Address: row[4],
		})
		if id > lastID {
			lastID = id
		}
	}
	fmt.Println("LoadFromExcel Execution Time:", time.Since(start))
}

// WriteToExcel writes student data to a specific class sheet in the Excel file.
func WriteToExcel(filename, className string) {
	start := time.Now()
	f, err := excelize.OpenFile(filename)
	if err != nil {
		f = excelize.NewFile()
		f.SetSheetName("Sheet1", className)
	} else if index, err := f.GetSheetIndex(className); err != nil || index == -1 {
		f.NewSheet(className)
	}
	headers := []string{"ID", "Name", "Grade", "Phone", "Address"}
	for i, h := range headers {
		f.SetCellValue(className, fmt.Sprintf("%c1", 'A'+i), h)
	}
	for i, student := range students {
		f.SetCellValue(className, fmt.Sprintf("A%d", i+2), student.ID)
		f.SetCellValue(className, fmt.Sprintf("B%d", i+2), student.Name)
		f.SetCellValue(className, fmt.Sprintf("C%d", i+2), student.Grade)
		f.SetCellValue(className, fmt.Sprintf("D%d", i+2), student.Phone)
		f.SetCellValue(className, fmt.Sprintf("E%d", i+2), student.Address)
	}
	f.SaveAs(filename)
	fmt.Println("WriteToExcel Execution Time:", time.Since(start))
}

// AddStudent adds a new student to memory and Excel file.
func AddStudent(scanner *bufio.Scanner, filename, className string) {
	start := time.Now()
	var name, phone, address string
	var grade float64

	fmt.Print("Enter Name: ")
	scanner.Scan()
	name = scanner.Text()

	fmt.Print("Enter Grade: ")
	scanner.Scan()
	gradeInput := scanner.Text()
	parsedGrade, err := strconv.ParseFloat(gradeInput, 64)
	if err != nil {
		fmt.Println("Invalid grade input.")
		return
	}
	grade = parsedGrade

	fmt.Print("Enter Phone: ")
	scanner.Scan()
	phone = scanner.Text()

	fmt.Print("Enter Address: ")
	scanner.Scan()
	address = scanner.Text()

	lastID++
	students = append(students, Student{ID: lastID, Name: name, Grade: grade, Phone: phone, Address: address})
	WriteToExcel(filename, className)
	fmt.Println("Student added successfully with ID:", lastID)
	fmt.Println("AddStudent Execution Time:", time.Since(start))
}

// DisplayStudents prints all students in memory for a specific class.
func DisplayStudents() {
	start := time.Now()
	if len(students) == 0 {
		fmt.Println("No students to display.")
		return
	}
	for _, s := range students {
		fmt.Printf("ID: %d | Name: %s | Grade: %.2f | Phone: %s | Address: %s\n", s.ID, s.Name, s.Grade, s.Phone, s.Address)
	}
	fmt.Println("DisplayStudents Execution Time:", time.Since(start))
}
