def section(name)
    puts
    puts
    puts name
end

section("Modules")

module LengthConversion
    WEBSITE = "http://www.google.com"
    
    def self.miles_to_feet(miles)
        feet = miles * 5280
        feet
    end

    def self.miles_to_inches(miles)
        inches = miles * 63360
        inches
    end

    def self.miles_to_centimeters(miles)
        centimeters = miles * 160934
        centimeters
    end
end

puts LengthConversion::WEBSITE
puts LengthConversion.miles_to_feet(10)
puts LengthConversion.miles_to_inches(10)
puts LengthConversion.miles_to_centimeters(10)