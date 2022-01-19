def section(name)
    puts
    puts
    puts name
 end

=begin
Print content to the console.
=end
p "puts" # print to stdout
puts "puts" # print to stdout and newline
print "print" # print is a synonym for puts, but without a new line

=begin
Variables
=end

section("Variables:")
name = "John"
last_name = "Doe"
age = 30
is_married = false

# Print variables
puts name
puts last_name
puts age
puts is_married
puts name + " " + last_name + " " + age.to_s + " " + is_married.to_s

section("Variables - 2:")
a = 10
b = 20
c = a + b

=begin
This is the same as:
a, b, c = 10, 20, 30
=end

p a, b, c
puts a, b, c
print a, b, c

section("Variables - 3:")
a, b = b, a

p a, b, c
puts a, b, c
print a, b, c

section("Constants - 1:")
NAME = "John"
LAST_NAME = "Doe"
AGE = 30

p NAME
p LAST_NAME
p AGE

# Ruby allow us to change the value of a constant
# NAME = "Jane"
p NAME


section("Object methods - 1:")
# In ruby all is an object
# In ruby, methods are functions that are associated with an object

p "Hello".length
p "Hello".reverse
p "Hello".upcase
p 10.next


section("Nil - 1:")
# Nil is a special value that represents an empty value


section("String interpolation - 1:")
# String interpolation is a way to insert variables into a string
puts "Hello #{NAME}, you are #{AGE}"
puts "The sum of #{a} and #{b} is #{a + b}"


section("Gets - 1:")
# Gets is a method that reads a line from the console
# It returns the line as a string
# console_input = gets


section("Gets chomp- 1:")
# Gets chomp is a method that reads a line from the console
# It returns the line as a string
# It removes the newline character from the end of the line
# console_input = gets.chomp

