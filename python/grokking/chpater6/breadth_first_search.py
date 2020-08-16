from collections import deque

graph = {}
graph["you"] = ["alice", "bob", "clarie"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["clarie"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

def bfs(graph, root):
    search_queue = deque() # Creates a new queue
    search_queue += graph[root] # Adds all of your neighbors to the search queue

    while search_queue:
        person = search_queue.popleft()
        if person_is_seller(person):
            print(person, " is mango seller!")
            return True
        else:
            search_queue += graph[person]
    return False

def person_is_seller(name):
    return name[-1] == 'm'

print(bfs(graph, "you"))
