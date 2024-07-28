package main

import "fmt"

// const age = 57

// // Functions

// func add(a, b int) int {
// 	return a + b
// }

// func getLanguages() (string, string, string) {
// 	return "golang", "javascript", "python"
// }

// func processIt(fn func(a int) int) {
// 	fn(2)
// }

// func processItAgain() func(a int) int {
// 	return func(a int) int {
// 		return a + 10
// 	}
// }

// // variadic functions
func sum(nums ...int) int {
	total := 0

	for _, num := range nums {
		total += num
	}
	return total
}

func main() {
	// fmt.Println("Hello mom")

	// Simple values

	// int
	// fmt.Println(1 + 1)

	// string
	// fmt.Println("Hello there")

	// bool
	// fmt.Println(true)

	// floats
	// fmt.Println(10.5)

	// Variables

	// var name string = "Astr"
	// var name = "Astr"
	// name := "Astr"

	// fmt.Println(name)

	// age = 14 // not allowed
	// fmt.Println(age)

	// const (
	// 	port = 5000
	// 	host = "localhost"
	// )

	// fmt.Println(host)
	// fmt.Println(port)

	// // for loop
	// for -> only constructor for looping

	// while loop
	// i := 1
	// for i <= 3 {
	//	fmt.Println(i)
	// 	i = i + 1
	// }

	// infinite loop
	// for {
	// }

	// classic for loop
	// for i := 0; i <= 3; i++ {
	// 	break
	// 	continue
	// 	fmt.Println(i)
	// }

	// for i := range 5 {
	// 	fmt.Println(i)
	// }

	// // if else

	// age := 13

	// if age > 18 {
	// 	fmt.Println("Person is an adult")
	// } else if age == 18 {
	// 	fmt.Println("person is about to be an adult")
	// } else {
	// 	fmt.Println("person is not an adult")
	// }

	// // switch case

	// i := 3

	// switch i {
	// case 1:
	// 	fmt.Println("one")
	// case 2:
	// 	fmt.Println("two")
	// case 3:
	// 	fmt.Println("three")
	// default:
	// 	fmt.Println("other")
	// }

	// // time

	// time := time.Now()
	// day := time.Day()
	// hour := time.Hour()
	// min := time.Minute()
	// sec := time.Second()
	// year := time.Year()
	// month := time.Month()
	// str := time.String()

	// fmt.Println(time)
	// fmt.Println("day: ", day)
	// fmt.Println("hour: ", hour)
	// fmt.Println("min: ", min)
	// fmt.Println("sec: ", sec)
	// fmt.Println("year: ", year)
	// fmt.Println("month: ", month)
	// fmt.Println("str: ", str)

	// // type check
	// fmt.Println(reflect.TypeOf(age))

	// // Array = numbered sequence of specific length
	// var nums [4]int

	// // length
	// fmt.Println(len(nums))

	// nums[0] = 1
	// fmt.Println(nums[0])

	// // Slices - Dynamic arrays

	// var numbers []int //uninitialized slice nil
	// fmt.Println(numbers)
	// fmt.Println(numbers == nil)
	// fmt.Println(len(numbers))

	// var numbersAgain = make([]int, 2)
	// fmt.Println(numbersAgain)
	// // cap -> capacity = maximum numbers fo elements can fit
	// fmt.Println(cap(numbersAgain))

	// numbers = append(numbers, 1)
	// fmt.Println(numbers)
	// fmt.Println(cap(numbers))

	// numSlice := []int{}

	// numSlice = append(numSlice, 1)
	// numSlice = append(numSlice, 2)

	// fmt.Println(numSlice)
	// fmt.Println(cap(numSlice))
	// fmt.Println(len(numSlice))

	// var nums = make([]int, 0, 5)
	// nums = append(nums, 2)
	// var nums2 = make([]int, len(nums))

	// //copy function
	// copy(nums2, nums)

	// fmt.Println(nums, nums2)

	// Slice operator
	// var nums = []int{1, 2, 3}
	// fmt.Println(nums[0:2])
	// fmt.Println(nums[:2])
	// fmt.Println(nums[1:])

	// slice package
	// var nums1 = []int{1, 2}
	// var nums2 = []int{1, 2, 3}

	// fmt.Println(slices.Equal(nums1, nums2))

	// var nums = [][]int{{1, 2, 3}, {1, 2, 3}}
	// fmt.Println(nums)

	// //maps -> objects,Dictionary
	// m := make(map[string]string)
	// m["name"] = "golang" //set element
	// m["area"] = "backend"
	// fmt.Println(m["name"]) //get element
	// // // if key does not exist in the map it returns zero value
	// fmt.Println(m["phone"])
	// fmt.Println(m["area"])
	// fmt.Println(len(m))

	// delete(m, "area") //delete elements
	// fmt.Println(m)

	// clear(m) // Clear whole map
	// fmt.Println(m)

	// m := map[string]int{"age": 26, "phone": 2}
	// m2 := map[string]int{"age": 26, "phone": 2}
	// fmt.Println(m)

	// value, ok := m["phone"]

	// if ok {
	// 	fmt.Println("all ok")
	// } else {
	// 	fmt.Println("not ok")
	// }

	// fmt.Println("value", value)

	// isEqual := maps.Equal(m, m2)

	// fmt.Println(isEqual)

	// // Range is used to iterate over data structure
	//// Range in Slice
	// nums := []int{6, 7, 8}
	// sum := 0

	// for index, num := range nums {
	// 	fmt.Println("index", index)
	// 	sum += num
	// }

	// fmt.Println(sum)

	//// Range in map
	// m := map[string]string{"name": "Aakash", "lName": "Jyoti"}

	// for key, val := range m {
	// 	fmt.Println("key", key, ", value", val)
	// }

	// // unicode code point rune
	// // starting byte of rune

	//// Range in String
	// for i, c := range "golang" {
	// 	fmt.Println(i, string(c))
	// }

	// // Functions
	// result := add(30, 22)
	// fmt.Println(result)

	// lang1, lang2, lang3 := getLanguages()
	// fmt.Println(lang1, lang2, lang3)

	// fn := func(a int) int {
	// 	return a
	// }

	// processIt(fn)

	// fn1 := processItAgain()
	// val := fn1(12)
	// fmt.Println(val)

	// // Variadic functions -- functions in which we can pass n number of parameter
	numbers := []int{1, 2, 3, 4, 5, 6, 7, 8, 9}
	total := sum(numbers...)
	fmt.Println(total)
}
