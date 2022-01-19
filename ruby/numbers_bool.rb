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
