# module Security
#     require 'bcrypt'

#     def self.hash_password(password)
#         BCrypt::Password.create(password)
#     end

#     def self.verify_password(password, hash)
#         BCrypt::Password.new(hash) == password
#     end
# end

# Security.hash_password("secret123")
# Security.verify_password("secret123", Security.hash_password("secret123"))

# Mixin
module Security
    require 'bcrypt'

    def hash_password(password)
        BCrypt::Password.create(password)
    end

    def verify_password(password, hash)
        BCrypt::Password.new(hash) == password
    end
end