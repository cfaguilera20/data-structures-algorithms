# frozen_string_literal: true

# AbstractFactory
class AbstractFactory
  def create_monitor
    raise(NotImplementedError, "#{self.class} has not implemented method '#{__method__}'")
  end

  def create_keeyboard
    raise(NotImplementedError, "#{self.class} has not implemented method '#{__method__}'")
  end
end
