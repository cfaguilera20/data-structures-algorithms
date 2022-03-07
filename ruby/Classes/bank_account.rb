class BankAccount 
    def initialize
        @amount = 5000
    end

    def status 
        puts "Your account has a balance of #{amount} dollars."
    end

    private

    def amount 
        @amount / 100.0
    end
end

account = BankAccount.new
puts account.status