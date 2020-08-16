book = dict()
book["apple"] = 0.67
book["milk"] = 1.49
book["avodado"] = 1.49
print(book)

voted = {}
def check_voter(name):
    if voted.get(name):
        print("Kick them out!")
    else:
        voted[name] = True
        print("Let them voted!")

check_voter("Charls")
check_voter("Carlos")
check_voter("Carlos")

cache = {}
def get_page(url):
    if cache.get(url):
        return cache[url]
    else:
        data = get_data_from_server(url)
        cache[url] = data
        return data

def get_data_from_server(url):
    return "Hello world"

print(get_page("http://hello.com"))
print(get_page("http://hello.com"))
