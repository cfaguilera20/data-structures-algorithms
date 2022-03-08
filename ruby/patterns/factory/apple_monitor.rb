# frozen_string_literal: true

require_relative "./abstract_monitor"

# AppleMonitor
class AppleMonitor < AbstractMonitor
  def display
    puts("Apple monitor")
  end
end
