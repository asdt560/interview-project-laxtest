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

export type agencyData = {
  data: {
    attributes: {
      title: string,
      abbreviation: string,
      field_rep_start: string,
      status: Boolean,
      moderation_state: string | null,
      description: string | null,
      telephone: string | null,
      email: [],
      is_centralized: false,
      portal_submission_format: string,
      reading_rooms: [],
      submission_address: SubmissionAddress | null,
      submission_fax: null,
      submission_web: string | null,
      website: string | null
    },
    relationships: {
        agency?: {
          data: {
            type: string,
            id: string,
            meta: {
              drupal_internal__target_id: number
            }
          },
          links: {
            related: {
              href: string
            },
            self: {
              href: string
            }
          }
        },
        foia_officers?: {
          data: [],
          links: {
            related: {
              href: string
            },
            self: {
              href: string
            }
          }
        },
        field_misc?: {
          data: [],
          links: {
            related: {
              href: string
            },
            self: {
              href: string
          }
        },
        public_liaisons?: {
          data: [],
          links: {
            related: {
              href: string
            },
            self: {
              href: string
            }
          }
        },
        paper_receiver?: {
          data: [] | null,
          links: {
            related: {
              href: string
            }
            self: {
              href: string
            }
          }
        },
        request_form?: {
          data: [] | null,
          links: {
            related: {
              href: string
            },
            self: {
              href: string
            }
          }
        },
        service_centers?: {
          data: [],
          links: {
            related: {
              href: string
            }
            self: {
              href: string
            }
          }
        }
      }
    }
  },
  links: {
    self: {
      href: string,
    },
  },
};

export type TableRow = {
  title: string,
  website: {
    title : string,
    uri?: string
  },
  address: string,
  id: string,
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