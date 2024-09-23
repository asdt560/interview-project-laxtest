export type TableData = {
  data: TableRowsData[],
  links: {
    next: {
      href: string,
    }
    self: {
      href: string
    }
  }
}

export type TableRow = {
  title: string,
  website: {
    title : string,
    uri?: string
  },
  address: string
}

export type TableRowsData = {
  type: string,
  attributes: {
    abbreviation: string,
    submission_address?: SubmissionAddress,
    title: string,
    website: {
      title : string,
      uri: string
    } | null,
  },
  id: string,
  links: {
    self: string,
  },
}

export type SubmissionAddress = {
  langcode?: string,
  country_code?: string,
  administrative_area?: string,
  locality?: string,
  dependent_locality?: string | null,
  postal_code?: string,
  sorting_cod?: string | null,
  address_line1?: string,
  address_line2?: string,
  organization?: string,
  given_name?: string | null,
  additional_name?: string | null,
  family_name?: string | null
}