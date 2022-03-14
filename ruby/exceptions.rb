# HelloError
class HelloError < RuntimeError
  def initialize(msg = "This is a custom exception", exception_type = "custom")
    @exception_type = exception_type
    super(msg)
  end
end

# hello
def hello
  puts("Hello")
  raise(HelloError, "This is a custom exception, with a custom message")
end

begin
  hello
rescue HelloError => e
  puts("HelloError")
  puts(e.message)
rescue StandardError => e
  p(e)
end
