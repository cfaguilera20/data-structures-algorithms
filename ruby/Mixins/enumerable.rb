class ConvinenceStore
    include Enumerable
    attr_reader :snacks

    def initialize()
        @snacks = []
    end

    def add_snack(snack)
        snacks << snack
    end

    def each
        # snacks.each do |snack| 
        #     yield snack 
        # end
        snacks.each { |snack| yield snack }
    end

    def each_with_index
        snacks.each_with_index { |snack, index| yield snack, index }
    end
end

bodega = ConvinenceStore.new
bodega.add_snack("Doritos")
bodega.add_snack("Cheetos")
bodega.add_snack("Lays")
bodega.add_snack("Tostitos")
p bodega.snacks

bodega.each { |snack| puts "I like #{snack}" }

p bodega.any? { |snack| snack.include?("T") }
p bodega.map { |snack| snack.upcase }
p bodega.select { |snack| snack.downcase.include?("a") }
p bodega.sort