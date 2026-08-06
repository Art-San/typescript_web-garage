const DocumentStatus = {
  Draft: 'draft',
  Published: 'published',
  Archived: 'archived'
} as const

type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus]

interface DocumentBase {
  id: string
  author: string
  createdAt: Date
  status: DocumentStatus
}

type Article = DocumentBase & {
  type: 'article'
}
type Video = DocumentBase & {
  type: 'video'
}
type Podcast = DocumentBase & {
  type: 'podcast'
}

type Document = Article | Video | Podcast

interface Publishable {
  publish(): void
}

class ArticleDocument implements Publishable {
  constructor(
    public id: string,
    public author: string,
    public createdAt: Date,
    public status: DocumentStatus,
    public type: 'article'
  ) {}

  publish() {
    this.status = DocumentStatus.Published
  }
}

function getDocumentInfo(document: Document): string {
  return `${document.author} - ${document.createdAt}`
}
