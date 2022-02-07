class Medal 
    include Comparable
    attr_reader :type, :weight

    MEDAL_TYPES = {
        "Gold" => 3,
        "Silver" => 2,
        "Bronze" => 1
    }
    
    def initialize(type, weight)
        @type = type
        @weight = weight
    end

    def <=>(other)
        if MEDAL_TYPES[type] < MEDAL_TYPES[other.type]
            -1
        elsif MEDAL_TYPES[type] > MEDAL_TYPES[other.type]
            1
        else
            0
        endx
    end
end


# Test
gold = Medal.new("Gold", 1)
silver = Medal.new("Silver", 2)
bronze = Medal.new("Bronze", 3)

puts gold < silver
puts silver < bronze
puts gold < bronze
puts gold > silver
puts silver > bronze
puts gold > bronze
puts silver.between?(bronze, gold)
