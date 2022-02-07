module Announcer
    def who_am_i
        "I am a #{self.class.name}"
    end
end

class Dog
    extend Announcer
end

class Cat
    extend Announcer
end
    
dog = Dog.new
cat = Cat.new

# Throw an error
# p dog.who_am_i
# p cat.who_am_i

p Dog.who_am_i
p Cat.who_am_i