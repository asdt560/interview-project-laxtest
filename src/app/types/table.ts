export type TableData = {
  data: TableRows[],
  links: {
    next: {
      href: String,
    }
    self: {
      href: String
    }
  }
}

export type TableRows = {
  type: String,
  attributes: {
    abbreviation: String,
    submission_address?: SubmissionAddress,
    title: String,
    website: String | null
  },
  id: String,
  links: {
    self: String,
  },
}

export type SubmissionAddress = {
  langcode?: String,
  country_code?: String,
  administrative_area?: String,
  locality?: String,
  dependent_locality?: String | null,
  postal_code?: String,
  sorting_cod?: String | null,
  address_line1?: String,
  address_line2?: String,
  organization?: String,
  given_name?: String | null,
  additional_name?: String | null,
  family_name?: String | null
}