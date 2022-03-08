# frozen_string_literal: true

# AppleFactory
class AppleFactory < AbstractFactory
  def create_monitor
    AppleMonitor.new
  end

  def create_keeyboard
    raise(NotImplementedError, "#{self.class} has not implemented method '#{__method__}'")
  end
end
