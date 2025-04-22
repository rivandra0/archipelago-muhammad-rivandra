# Basic Questions

## 🛠 Technologies Needed

- **Backend Framework**: [Gin](https://github.com/gin-gonic/gin)
- **Frontend Framework**: [Alpine.js](https://alpinejs.dev/)
- **Database**: PostgreSQL
- **Media Storage**:
  - MinIO (S3-compatible)
  - or Amazon S3 _(depends on company culture)_

#### Optional Enhancements

- **Caching**: Redis
- **Message Queue**: RabbitMQ _(for background processing / decoupling)_

---

## 🧱 Data Structure (Go & SQL)

```go
type ImageItem struct {
    Id        uuid.UUID
    Name      string
    Status    string

    CreatedAt time.Time
    CreatedBy string
    UpdatedAt time.Time
    UpdatedBy string
}
```

```sql
CREATE TYPE image_status AS ENUM ('under_review', 'not_approved', 'public');

CREATE TABLE image_items (
    id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    status image_status NOT NULL DEFAULT 'under_review',

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_by TEXT NOT NULL,
    updated_at TIMESTAMPTZ,
    updated_by TEXT
);

```

## 🌐 Routes

#### 🧑‍💻 User Routes

- GET /my-images
- POST /image-to-review (with image upload)

#### 🕵️ Reviewer Routes

- GET /images-to-review
- POST /image/:id/approve
- POST /image/:id/not-approve

## 🧱 Logic Flow

1. User uploads via POST /image-to-review
2. Reviewer lists pending images with GET /images-to-review
3. Reviewer approves/not-approve via:
   - POST /image/:id/approve
   - POST /image/:id/not-approve

the flow of the application going to look like this.

```
frontend > backend handler > service > database & storage
```
