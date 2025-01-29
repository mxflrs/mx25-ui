interface SanityDocument {
    _id: string;
    _type: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
  }

  export interface SanityImage {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    }
  }