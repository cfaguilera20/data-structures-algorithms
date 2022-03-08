# frozen_string_literal: true

require_relative "./abstract_factory"
require_relative "./apple_monitor"
require_relative "./apple_keyboard"

# AppleFactory
class AppleFactory < AbstractFactory
  def create_monitor
    AppleMonitor.new
  end

  def create_keyboard
    AppleKeyboard.new
  end
end
