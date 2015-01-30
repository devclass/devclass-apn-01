class TestController < ApplicationController
  def index
    sleep 1
    render text: "done."
  end
end
