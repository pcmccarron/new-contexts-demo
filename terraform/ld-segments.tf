resource "launchdarkly_segment" "mountain_west" {
  key         = "mountain-west"
  name        = "Mountain West"
  project_key = launchdarkly_project.contexts_demo.key
  env_key     = launchdarkly_project.contexts_demo.environments[0].key
  description = "Users in the Mountain West Region"

  rules {
    clauses {
      attribute    = "state"
      op           = "contains"
      values       = ["Colorado", "Arizona", "New Mexico", "Wyoming", "Montana", "Utah", "Nevada", "Alberta"]
      negate       = false
      context_kind = "session"
    }
  }
}

resource "launchdarkly_segment" "pacific_northwest" {
  key         = "pacific-northwest"
  name        = "Pacific Northwest"
  project_key = launchdarkly_project.contexts_demo.key
  env_key     = launchdarkly_project.contexts_demo.environments[0].key
  description = "Users in the Pacific Northwest Region"

  rules {
    clauses {
      attribute    = "state"
      op           = "contains"
      values       = ["Washington", "Oregon", "Idaho", "Alaska", "British Columbia", "Northwest Territories", "Yukon", "Nunavut"]
      negate       = false
      context_kind = "session"
    }
  }
}

resource "launchdarkly_segment" "midatlantic" {
  key         = "mid-atlantic"
  name        = "Mid Atlantic"
  project_key = launchdarkly_project.contexts_demo.key
  env_key     = launchdarkly_project.contexts_demo.environments[0].key
  description = "Users in the Mid Atlantic Region"

  rules {
    clauses {
      attribute    = "state"
      op           = "contains"
      values       = ["Kentucky", "West Virginia", "Virginia", "Maryland", "District of Columbia", "Delaware", "New Jersey", "New York", "Pennsylvania"]
      negate       = false
      context_kind = "session"
    }
  }
}

resource "launchdarkly_segment" "south" {
  key         = "the-south"
  name        = "The South"
  project_key = launchdarkly_project.contexts_demo.key
  env_key     = launchdarkly_project.contexts_demo.environments[0].key
  description = "Users in the South Region"

  rules {
    clauses {
      attribute    = "state"
      op           = "contains"
      values       = ["Texas", "Oklahoma", "Alabama", "Louisiana", "Mississippi", "Tennessee", "Georgia", "Florida", "North Carolina", "South Carolina"]
      negate       = false
      context_kind = "session"
    }
  }
}

resource "launchdarkly_segment" "northeast" {
  key         = "northeast-region"
  name        = "Northeast"
  project_key = launchdarkly_project.contexts_demo.key
  env_key     = launchdarkly_project.contexts_demo.environments[0].key
  description = "Users in the Northeast Region"

  rules {
    clauses {
      attribute    = "state"
      op           = "contains"
      values       = ["Massachusetts", "Connecticut", "Rhode Island", "Vermont", "New Hampshire", "Maine", "Quebec", "Prince Edward Island", "Nova Scotia", "Newfoundland and Labrador", "New Brunswick"]
      negate       = false
      context_kind = "session"
    }
  }
}

resource "launchdarkly_segment" "midwest" {
  key         = "midwest-region"
  name        = "Midwest"
  project_key = launchdarkly_project.contexts_demo.key
  env_key     = launchdarkly_project.contexts_demo.environments[0].key
  description = "Users in the Midwest Region"

  rules {
    clauses {
      attribute    = "state"
      op           = "contains"
      values       = ["South Dakota", "North Dakota", "Minnesota", "Nebraska", "Kansas", "Missouri", "Arkansas", "Illinois", "Indiana", "Wisconsin", "Michigan", "Ohio", "Ontario", "Saskatchewan", "Manitoba"]
      negate       = false
      context_kind = "session"
    }
  }
}

resource "launchdarkly_segment" "west_coast" {
  key         = "west-coast"
  name        = "West Coast"
  project_key = launchdarkly_project.contexts_demo.key
  env_key     = launchdarkly_project.contexts_demo.environments[0].key
  description = "Users in the West Coast Region"

  rules {
    clauses {
      attribute    = "state"
      op           = "contains"
      values       = ["California", "Hawaii"]
      negate       = false
      context_kind = "session"
    }
  }
}

resource "launchdarkly_segment" "south_america" {
  key         = "south-latin-american-regions"
  name        = "South & Latin America"
  project_key = launchdarkly_project.contexts_demo.key
  env_key     = launchdarkly_project.contexts_demo.environments[0].key
  description = "Users in the South and Latin American timezones"

  rules {
    clauses {
      attribute    = "timezone"
      op           = "contains"
      values       = ["Argentina", "Barbados", "St Barthelemy", "Atlantic", "La Paz", "Curacao", "Rio Branco", "Sao Paulo", "Maceio", "Manaus", "Bahia", "Fortaleza", "Campo Grande", "Belem", "Cuiaba", "Recife", "Porto Velho", "Boa Vista", "Araguaina", "Santiago", "Bogota", "Costa Rica", "Galapagos", "Guayaquil", "Mexico", "Chihuahua", "Tijuana"]
      negate       = false
      context_kind = "session"
    }
  }
}

resource "launchdarkly_segment" "africa" {
  key         = "africa"
  name        = "Africa"
  project_key = launchdarkly_project.contexts_demo.key
  env_key     = launchdarkly_project.contexts_demo.environments[0].key
  description = "Users in the African timezones"

  rules {
    clauses {
      attribute    = "timezone"
      op           = "contains"
      values       = ["Africa"]
      negate       = false
      context_kind = "session"
    }
  }
}

resource "launchdarkly_segment" "europe" {
  key         = "europe"
  name        = "Europe"
  project_key = launchdarkly_project.contexts_demo.key
  env_key     = launchdarkly_project.contexts_demo.environments[0].key
  description = "Users in the European and Middle East timezones"

  rules {
    clauses {
      attribute    = "timezone"
      op           = "contains"
      values       = ["Europe"]
      negate       = false
      context_kind = "session"
    }
  }
}

resource "launchdarkly_segment" "asia_pacific" {
  key         = "asia-pacific-region"
  name        = "Asia Pacific"
  project_key = launchdarkly_project.contexts_demo.key
  env_key     = launchdarkly_project.contexts_demo.environments[0].key
  description = "Users in the Asian based timezones"

  rules {
    clauses {
      attribute    = "timezone"
      op           = "contains"
      values       = ["Asia", "Australia", "Indian", "Auckland"]
      negate       = false
      context_kind = "session"
    }
  }
}

