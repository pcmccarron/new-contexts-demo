resource "launchdarkly_feature_flag" "layout" {
  project_key = launchdarkly_project.contexts_demo.key
  key         = "clockFormat"
  name        = "Change the clock layout"
  description = "Switches between the 12 and 24 hour formats"
  tags        = ["terraform-managed"]
  temporary   = true

  variation_type = "string"
  variations {
    value = "en-US"
    name  = "12 Hour Format"
  }
  variations {
    value = "en-GB"
    name  = "24 Hour Format"
  }
  defaults {
    on_variation  = 0
    off_variation = 1
  }
}

resource "launchdarkly_feature_flag_environment" "layout" {
  flag_id = launchdarkly_feature_flag.layout.id
  env_key = launchdarkly_project.contexts_demo.environments[0].key

  rules {
    description = "flag rule for clock layout"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.mountain_west.key, launchdarkly_segment.pacific_northwest.key, launchdarkly_segment.midatlantic.key, launchdarkly_segment.south.key, launchdarkly_segment.northeast.key, launchdarkly_segment.midwest.key, launchdarkly_segment.west_coast.key]
    }
    variation = 0
  }
  fallthrough {
    variation = 0
  }
  off_variation = 0
}

resource "launchdarkly_feature_flag" "date" {
  project_key = launchdarkly_project.contexts_demo.key
  key         = "date"
  name        = "Date format for our application"
  description = "toggles between D/M/Y and M/D/Y formats"
  tags        = ["terraform-managed"]
  temporary   = true

  variation_type = "boolean"
  variations {
    value = true
    name  = "Month/Day/Year"
  }
  variations {
    value = false
    name  = "Day/Month/Year"
  }
  defaults {
    on_variation  = 0
    off_variation = 1
  }
}

resource "launchdarkly_feature_flag_environment" "date" {
  flag_id = launchdarkly_feature_flag.date.id
  env_key = launchdarkly_project.contexts_demo.environments[0].key

  rules {
    description = "flag rule for date format"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.mountain_west.key, launchdarkly_segment.pacific_northwest.key, launchdarkly_segment.midatlantic.key, launchdarkly_segment.south.key, launchdarkly_segment.northeast.key, launchdarkly_segment.midwest.key, launchdarkly_segment.west_coast.key]
    }
    variation = 0
  }
  fallthrough {
    variation = 0
  }
  off_variation = 0
}

resource "launchdarkly_feature_flag" "device" {
  project_key = launchdarkly_project.contexts_demo.key
  key         = "browserType"
  name        = "Change cards to show client or server-side SDKs"
  description = "Foundational flag for running an experiment on engagement"
  tags        = ["terraform-managed"]
  temporary   = true

  variation_type = "boolean"
  variations {
    value = true
    name  = "server-side SDKs"
  }
  variations {
    value = false
    name  = "client-side SDKs"
  }
  defaults {
    on_variation  = 0
    off_variation = 1
  }
}

resource "launchdarkly_feature_flag" "background" {
  project_key = launchdarkly_project.contexts_demo.key
  key         = "background"
  name        = "Gradient backgrounds for regions"
  description = "Serves a different color gradient background depending on user region"
  tags        = ["terraform-managed"]
  temporary   = true

  variation_type = "string"
  variations {
    value = "linear-gradient(200deg, #00d4ff 10%, #2d0979 45%, #602801 80%)"
    name  = "Mountain West"
  }
  variations {
    value = "linear-gradient(200deg, #595e76 10%, #0b362c 45%, #1f2148 80%)"
    name  = "Pacific Northwest"
  }
  variations {
    value = "linear-gradient(200deg, #ff00f4 10%, #6f00ff 45%, #21004b 80%)"
    name  = "West Coast"
  }
  variations {
    value = "linear-gradient(200deg, #fbea54 10%, #e9772e 45%, #3c6076 80%)"
    name  = "Midwest"
  }
  variations {
    value = "linear-gradient(200deg, #bed0db 10%, #9ab4cc 45%, #ac6264 80%)"
    name  = "Northeast"
  }
  variations {
    value = "linear-gradient(200deg, #eecf19 10%, #3c454e 45%, #1a1a1a 80%)"
    name  = "Midatlantic"
  }
  variations {
    value = "linear-gradient(200deg, #fac355 10%, #f3a65f 45%, #e87851 80%)"
    name  = "The South"
  }
  variations {
    value = "linear-gradient(200deg, #ffcc00 10%, #203e5f 45%, #1a2634 80%)"
    name  = "Europe"
  }
  variations {
    value = "linear-gradient(200deg, #f3c43e 10%, #ff6d01 45%, #9f0102 80%)"
    name  = "Asia"
  }
  variations {
    value = "linear-gradient(200deg, #c98455 10%, #894e34 45%, #543939 80%)"
    name  = "Africa"
  }
  variations {
    value = "linear-gradient(200deg, #159e4f 10%, #1c7062 45%, #3345a3 80%)"
    name  = "South & Latin America"
  }
  defaults {
    on_variation  = 0
    off_variation = 1
  }

}

resource "launchdarkly_feature_flag_environment" "background" {
  flag_id = launchdarkly_feature_flag.background.id
  env_key = launchdarkly_project.contexts_demo.environments[0].key

  rules {
    description = "Background for Mountain West"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.mountain_west.key]
    }
    variation = 0
  }
  rules {
    description = "Background for Pacific Northwest"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.pacific_northwest.key]
    }
    variation = 1
  }
  rules {
    description = "Background for West Coast"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.west_coast.key]
    }
    variation = 2
  }
  rules {
    description = "Background for Midwest"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.midwest.key]
    }
    variation = 3
  }
  rules {
    description = "Background for Northeast"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.northeast.key]
    }
    variation = 4
  }
  rules {
    description = "Background for Mid Atlantic"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.midatlantic.key]
    }
    variation = 5
  }
  rules {
    description = "Background for The South"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.south.key]
    }
    variation = 6
  }
  rules {
    description = "Background for Europe"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.europe.key]
    }
    variation = 7
  }
  rules {
    description = "Background for Asia Pacific"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.asia_pacific.key]
    }
    variation = 8
  }
  rules {
    description = "Background for Africa"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.africa.key]
    }
    variation = 9
  }
  rules {
    description = "Background for South & Latin America"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.south_america.key]
    }
    variation = 10
  }
  fallthrough {
    variation = 0
  }
  off_variation = 0
}

resource "launchdarkly_feature_flag" "region" {
  project_key = launchdarkly_project.contexts_demo.key
  key         = "region"
  name        = "Gallery of regional photos"
  description = "Serves regional photos depending on where you are"
  tags        = ["terraform-managed"]
  temporary   = true

  variation_type = "string"
  variations {
    value = "mountainWest"
    name  = "Mountain West"
  }
  variations {
    value = "pacificNorthwest"
    name  = "Pacific Northwest"
  }
  variations {
    value = "westCoast"
    name  = "West Coast"
  }
  variations {
    value = "midWest"
    name  = "Midwest"
  }
  variations {
    value = "northEast"
    name  = "Northeast"
  }
  variations {
    value = "midAtlantic"
    name  = "Mid Atlantic"
  }
  variations {
    value = "southRegion"
    name  = "The South"
  }
  variations {
    value = "europe"
    name  = "Europe"
  }
  variations {
    value = "asiaPacific"
    name  = "Asia"
  }
  variations {
    value = "africa"
    name  = "Africa"
  }
  variations {
    value = "southAmerica"
    name  = "South & Latin America"
  }
  defaults {
    on_variation  = 0
    off_variation = 1
  }

}

resource "launchdarkly_feature_flag_environment" "region" {
  flag_id = launchdarkly_feature_flag.region.id
  env_key = launchdarkly_project.contexts_demo.environments[0].key

  rules {
    description = "Gallery for Mountain West"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.mountain_west.key]
    }
    variation = 0
  }
  rules {
    description = "Gallery for Pacific Northwest"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.pacific_northwest.key]
    }
    variation = 1
  }
  rules {
    description = "Gallery for West Coast"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.west_coast.key]
    }
    variation = 2
  }
  rules {
    description = "Gallery for Midwest"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.midwest.key]
    }
    variation = 3
  }
  rules {
    description = "Gallery for Northeast"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.northeast.key]
    }
    variation = 4
  }
  rules {
    description = "Gallery for Mid Atlantic"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.midatlantic.key]
    }
    variation = 5
  }
  rules {
    description = "Gallery for The South"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.south.key]
    }
    variation = 6
  }
  rules {
    description = "Gallery for Europe"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.europe.key]
    }
    variation = 7
  }
  rules {
    description = "Gallery for Asia Pacific"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.asia_pacific.key]
    }
    variation = 8
  }
  rules {
    description = "Gallery for Africa"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.africa.key]
    }
    variation = 9
  }
  rules {
    description = "Gallery for South & Latin America"
    clauses {
      attribute = "segmentMatch"
      op        = "segmentMatch"
      values    = [launchdarkly_segment.south_america.key]
    }
    variation = 10
  }
  fallthrough {
    variation = 0
  }
  off_variation = 0
}
