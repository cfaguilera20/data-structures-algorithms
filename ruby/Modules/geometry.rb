require_relative "./circle.rb"
require_relative "./rectangle.rb"
require_relative "./square.rb"

puts Square.area(5)
puts Rectangle.area(5, 10)
puts Circle.area(5).round(2)