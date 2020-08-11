def countdown(i):
    print(i)
    if i <= 0: # Base case prevents to go into an infinitive loop.
        return
    else:
        countdown(i - 1)

if __name__ == '__main__':
    countdown(5)
