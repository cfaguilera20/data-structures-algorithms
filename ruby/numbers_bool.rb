def section(name)
    puts
    puts
    puts name
end

section("Numbers:")
puts 1.class
puts 0.1.class


section("String to number:")
puts "1".class
puts "1".to_i.class
puts "1".to_f.class

section("Number to string:")
puts 1.to_s.class


section("Booleans:")
p 10 < 20
p 10 > 20
puts false.class
puts true.class


section("Odd and even:")
p 10.odd?
p 10.even?


section("Methods and basic args:")
puts 10.+(20) # 10 + 20
puts 10.-(20) # 10 - 20
puts 10./(20) # 10 / 20
puts 10.*(20) # 10 * 20
puts 10.%(20) # 10 % 20


section("Between:")
p 10.between?(5, 20)
p "cat".between?("ant", "dog")
p "gnu".between?("ant", "dog")


section("Float methods:")
puts 10.0.class
puts 10.5.floor
puts 10.5.ceil
puts 3.14159.round
puts 3.14159.round(3)


section("Times:")
3.times { puts "Hello, charls" }
3.times do
    puts "Hello, charls"
end
3.times { |i| puts "Hello, charls #{i}" }
3.times do |i|
    puts "Hello, charls #{i}"
end


section("Downto:")
5.downto(1) { |i| puts "Hello, charls #{i}" }
5.downto(1) do |i|
    puts "Hello, charls #{i}"
end


section("Upto:")
5.upto(10) { |i| puts "Hello, charls #{i}" }
5.upto(10) do |i|
    puts "Hello, charls #{i}"
end
