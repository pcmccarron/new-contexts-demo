variable "launchdarkly_access_token" {
  type        = string
  description = "The Access Token for our LaunchDarkly account"
  default     = ""
  sensitive   = true
}
