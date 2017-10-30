require 'test_helper'

class FilemanagerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get filemanager_index_url
    assert_response :success
  end

end
