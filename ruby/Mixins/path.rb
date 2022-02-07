module Purchaseable
    def purchase(item)
        "You bought the #{item}"
    end
end 

class Bookstore
    include Purchaseable

    def purchase(item)
        "You bought a copy of the #{item}"
    end
end

class Supermarket
    include Purchaseable
end

class CornerMart < Supermarket
end

bookstore = Bookstore.new
puts bookstore.purchase("Book")

supermarket = Supermarket.new
puts supermarket.purchase("Candy")

quick_mart = CornerMart.new
puts quick_mart.purchase("Chips")

p Bookstore.ancestors
p CornerMart.ancestors