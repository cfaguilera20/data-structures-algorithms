module Square 
    def self.area(side)
        side * side
    end
end

module Rectangle
    def self.area(length, width)
        length * width
    end
end

module Circle
    def self.area(radius)
        Math::PI * radius * radius
    end
end

puts Square.area(5)
puts Rectangle.area(5, 10)
puts Circle.area(5).round(2)