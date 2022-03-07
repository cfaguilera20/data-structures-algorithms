require_relative 'security'

class Student 
    include Security # mixin

    # attr_reader
    # attr_writer 
    attr_accessor :last_name, :email, :username, :password
   
    def initialize(first_name, last_name, email, username, password)
        @first_name = first_name
        @last_name = last_name
        @email = email
        @username = username
        @password = hash_password password
    end

    def first_name  
        @first_name
    end

    def first_name=(first_name)
        @first_name
    end

   def to_s
        "#{@first_name} #{@last_name} #{@email} #{@username} #{password}"
   end
end

student = Student.new("John", "Doe", "mail@email.com", "johndoe", "secret123")
puts student.password
puts student.verify_password("secret123", student.password)