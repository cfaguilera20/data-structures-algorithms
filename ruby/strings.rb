def section(name)
    puts
    puts
    puts name
end

section("String:")
puts "Hi there, it's me, a string!"


section("String concatenation:")
name = "Carlos"
greetings = "Hi there, it's me, #{name}!"
puts greetings
puts greetings.length
puts greetings.class


section("String class:")
with_class = String.new("Carlos with class");
puts with_class


section("Multiline string:")
words = <<MLS
    This is a multiline,
    string.

        It has multiple lines.
    ---------------------------------
MLS

p words;
puts words;
print words;


section("Escape characters:")
puts "This is a string with a \n newline."
puts "This is a string with a \"quoatation marks\"."


section("Concatenate string:")
first_name = "Carlos"
last_name = "Aguilera"
full_name = first_name + " " + last_name
puts full_name

first_name += " ";
first_name += last_name;
puts first_name;

first_name.concat("!");
puts first_name;


section("Shovel operator:")
puts first_name << "!";


section("Prepend:")
puts first_name.prepend("Hello, ");


section("Length & Size:")
puts first_name.length
puts first_name.size


section("String in Ruby are mutable!:")
puts first_name

first_name[-1] = ""
puts first_name


section("Extracting characters:")
puts first_name[0, 5]
puts first_name.slice(0, 5)
puts first_name[1..5]
puts first_name.slice(1..5) # Range

puts first_name[1...5]
puts first_name.slice(1...5) # Range exclusive


section("Override:")
first_name[0] = "J"
puts first_name


section("Case methods:")
puts first_name.upcase  + " " + "upcase "
puts first_name.downcase + " " + "downcase"
puts first_name.swapcase + " " + "swapcase"
puts first_name.capitalize + " " + "capitalize"

section("Bang method:")
puts first_name.capitalize! + " " + "capitalize!" # Override
puts first_name.upcase! + " " + "upcase!" # Override
puts first_name.downcase! + " " + "downcase!" # Override


section("Reverse:")
puts first_name.reverse


section("Include:")
puts "Include \"carlos\": #{first_name}"
puts first_name.include?("carlos")
puts "Include \"Carlos\": #{first_name}"
puts first_name.include?("Carlos")

section("Empty & Nil:")
puts "Empty: #{first_name.empty?}"
puts "Nil: #{first_name.nil?}"
puts "".empty?
puts "".nil?

car = {
    :make => "Ford",
    :model => "Mustang",
    :year => "1964",
    :color => "red"
}

p car[:color]


def blocker_a(table) 
    p table[:color]
    yield table
    
end

blocker_a :hellox do |table|
    puts "Hello, #{table}"
end
