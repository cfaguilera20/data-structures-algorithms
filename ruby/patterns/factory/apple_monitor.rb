# frozen_string_literal: true

# AppleMonitor
class AppleMonitor < AbstractMonitor
  def display
    raise(NotImplementedError, "#{self.class} has not implemented method '#{__method__}'")
  end
end
