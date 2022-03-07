
class GadgetTwo

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

    def password=(new_password)
        @password = new_password if validate_password(new_password)
    end

    private

    def validate_password(new_password)
        new_password.is_a?(String) && new_password.length >= 6 && new_password =~ /\d/
    end

    def generate_production_number
        "#{("a".."z").to_a.sample}-#{rand(1..100)}"
    end
end

phone = GadgetTwo.new("joe", "password")
phone.password = "123"
phone.password = "taco123"
