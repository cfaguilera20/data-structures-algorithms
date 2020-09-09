# Set can't have duplicates.
fruits = set(["avocado", "tomato", "banana"])
vegetables = set(["beets", "carrots", "tomato"])
print(fruits | vegetables) # Union
print(fruits & vegetables) # Instersection
print(fruits - vegetables) # Difference
print(vegetables - fruits) # Difference

states_needed = set(["mt", "wa", "or", "ut", "ca", "az"])
stations = {}
stations["kone"] = set(["id", "nv", "ut"])
stations["ktwo"] = set(["wa", "id", "mt"])
stations["kthree"] = set(["or", "nv", "ca"])
stations["kfour"] = set(["nv", "ut"])
stations["kfive"] = set(["ca", "az"])
final_stations = set()

while states_needed:
    best_station = None
    states_covered = set()
    for station, states_for_station in stations.items():
        covered = states_needed & states_for_station
        if len(covered) > len(states_covered):
            best_station = station
            states_covered = covered
    states_needed -= states_covered
    final_stations.add(best_station)

print(final_stations)

