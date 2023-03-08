resource "launchdarkly_project" "contexts_demo" {
  key  = "contexts-demo"
  name = "Custom Contexts Demo"

  tags = [
    "terraform",
  ]

  default_client_side_availability {
    using_environment_id = true
    using_mobile_key     = false
  }

  environments {
    key   = "test"
    name  = "test"
    color = "7B42BC"
    # approval_settings {
    #  can_review_own_request = true
    #  can_apply_declined_changes = false
    #  min_num_approvals = 1
  }
}
