module Purchaseable
    def purchase(item)
        "You bought the #{item}"
    end
end 

class Bookstore
    prepend Purchaseable

    def purchase(item)
        "You bought a copy of the #{item}"
    end
end

p Bookstore.ancestors
book = Bookstore.new
p book.purchase("1984")