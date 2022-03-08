# frozen_string_literal: true

# AbstractKeyboard
class AbstractKeyboard
  def display
    raise(NotImplementedError, "#{self.class} has not implemented method '#{__method__}'")
  end
end
