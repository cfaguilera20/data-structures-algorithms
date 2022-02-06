def section(name)
    puts
    puts
    puts name
end


section("Methods:")
def hello_world
    puts "Hello World!"
end

hello_world
hello_world

section("Local variables:")
name = "John"
def hello_world
    name = "Carlos"
    puts "Hello World! My name is #{name}"
end

hello_world
puts "My name is #{name}"


section("Parameters:")
def hello_world name
    puts "Hello World! My name is #{name}"
end

hello_world "John"

def hello_world name, last_name
    puts "Hello World! My name is #{name} #{last_name}"
end

hello_world "John", "Doe"

def hello_world name, last_name = "Doe"
    puts "Hello World! My name is #{name} #{last_name}"
end

hello_world "John"
hello_world "Carlos", "Aguilera"


section("Return values:")
def sum_two_numbers a, b
    return a + b
end
puts sum_two_numbers 1, 2


section("If statement:")
if true
    puts "true"
end

if 1 < 2
    puts "One is less than two"
end

if "carlos".include?("los")
    puts "Yes, it includes los"
end

10.times do |i|
    puts "#{i} #{i.odd? ? "odd" : "even"}"
end

if false
    puts "This won't be printed"
end


section("If elsif else statement:")
color = "black"

if color == "red"
    puts "Color is red"
elsif color == "blue"
    puts "Color is blue"
else
    puts "Color is neither red nor blue"
end
