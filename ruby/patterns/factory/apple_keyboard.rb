# frozen_string_literal: true

# AppleKeyboard
class AppleKeyboard
  def display
    raise(NotImplementedError, "#{self.class} has not implemented method '#{__method__}'")
  end
end
