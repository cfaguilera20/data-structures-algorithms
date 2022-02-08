
class GadgetTwo

    attr_writer :password
    attr_reader :production_number
    attr_accessor :username

    def initialize(username, password)
        @username = username
        @password = password
        @production_number = generate_production_number
    end

    def to_s
        "Gadget #{@production_number} has the username #{@username}. It is made from #{self.class} class and it has the ID #{self.object_id}"
    end

    private 

    def generate_production_number
        "#{("a".."z").to_a.sample}-#{rand(1..100)}"
    end
end

phone = GadgetTwo.new("User1", "topsecret")
# phone.initialize # This is not a method, it is a constructor
p phone.production_number
# p phone.generate_production_number # This is not a public method, it is a private method
