# frozen_string_literal: true

module Lms
  # UnlinkGoogleClassroomsJob
  class UnlinkGoogleClassroomsJob < ApplicationJob
    queue_as :default

    def perform(user)
      @user = user
      @req = Net::HTTP::Patch.new(uri)
      assign_headers
      assign_body

      Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
        http.request(@req)
      end
    end

    def uri
      url = OauthApplication.cached_find_by(name: "rooms").api_url
      URI.parse("#{url}/classes/unlink_google_classroom")
    end

    def assign_headers
      @req["Authorization"] = "Bearer #{@user.create_bearer_token}"
      @req["Content-Type"] = "application/json"
    end

    def assign_body
      @req.body = { user_id: @user.arn }.to_json
    end
  end
end
