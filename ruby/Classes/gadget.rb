def section(name)
    puts
    puts
    puts name
 end

class Gadget
    # def hello
    #     puts "Hello"
    # end
end

puts Gadget.superclass
puts Gadget.superclass.superclass
puts Gadget.superclass.superclass.superclass

phone = Gadget.new
laptop = Gadget.new
microwave = Gadget.new

puts phone # => #<Gadget:0x007f9d8f8b0c80> Object location in memory
puts laptop
puts microwave
    
puts

puts phone.class # => Gadget
puts laptop.class
puts microwave.class

puts

# puts phone.methods.sort
puts phone.nil?
puts phone.is_a?(Gadget)
puts phone.is_a?(Object)

puts phone.respond_to?(:class)
puts phone.respond_to?(:methods)
puts phone.respond_to?(:hello)


section("Aliasing")
smartphone = Gadget.new
iphone = smartphone
p smartphone.object_id == iphone.object_id
p smartphone == iphone

section("Instance variables and initialize method")

class Gadget
    def initialize
        @username = "User #{rand(1..100)}"
        @password = "topsecret"
        @production_number = "#{("a".."z").to_a.sample}-#{rand(1..100)}" 
    end

    def info
        "Gadget #{@production_number} has the username #{@username}. It is made from #{self.class}"        
    end
end

phone = Gadget.new
puts phone.inspect
puts phone.instance_variables

laptop = Gadget.new
puts laptop.inspect
puts laptop.instance_variables

section("Instance methods")
puts phone.info
puts laptop.info
puts laptop.respond_to?(:info)
puts phone.methods - Object.methods

class GadgetBase 
    attr_accessor :username # reader and writer
    attr_reader :production_number
    attr_writer :password

    # Getters
    # def username
    #     @username
    # end

    # def password
    #     @password
    # end

    # def production_number
    #     @production_number
    # end

    # Setters
    # def username=(new_username)
    #     @username = new_username
    # end

    # def password=(new_password)
    #     @password = new_password
    # end

    # def production_number=(new_production_number)
    #     @production_number = new_production_number
    # end

    def initialize
        @username = "User #{rand(1..100)}"
        @password = "topsecret"
        @production_number = "#{("a".."z").to_a.sample}-#{rand(1..100)}" 
    end

    def to_s
        "Gadget #{@production_number} has the username #{@username}. It is made from #{self.class} class and it has the ID #{self.object_id}"
    end
end

phone = GadgetBase.new
puts phone.to_s
puts phone.username
phone.username = "New username"
puts phone.username


section("Parameterized classes")
class Gadget
    attr_reader :production_number
    attr_accessor :username

    def initialize(username, password)
        @username = username
        @password = password
        @production_number = "#{("a".."z").to_a.sample}-#{rand(1..100)}"
    end

    def to_s
        "Gadget #{@production_number} has the username #{@username}. It is made from #{self.class} class and it has the ID #{self.object_id}"
    end
end

phone = Gadget.new("User CFA", "topsecret")
puts phone.to_s

section("Class variables")