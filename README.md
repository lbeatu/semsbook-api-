# Semsboo(Blog) API

This is a Node/Express/MongoDB REST API for image gallery. It is the API ONLY. 

## Getting Started

```
  Open the config/default.json file and add your mongoURI and your jwtSecret
```

```bash
  npm install
  npm run server # Runs on http://localhost:5000
```

# API Usage & Endpoints

## Add Post  [POST /api/posts]

- Request: Add post and request form-data 

  - Headers

        Content-type: multipart/form-data

  - Body

            {
              "post": "",
              "filename": File,
              "url": "",
              "url": "",
              "title": "",
              "country": "",
              "context": "",
              "creator": "",
              "date": "",
            }

- Response: 200 (application/json)

  - Body

          {
            "posts": ""
          }



## Get Posts [GET /api/posts]

- Request: Get all posts of a specific post

  - Headers

        x-auth-token: YOURJWT

* Response: 200 (application/json)

  - Body

          {
            "post": []
          }


## Post İmage [GET /api/posts/:filename]

- Request: File operations

  - Headers

        Content-type: [image/jpeg || image/png]

* Response: 200 (formdata)

  - Body

        readstream.pipe(image);
        ## Post İmage [GET /api/posts/:filename]
        
        
        
## Delete İmage,Post [GET /api/posts/d/:_id]
- Request: Delete existing post

  - Parameters

    - id: 1 (number) - An unique identifier of the post.
    -filename: postname(string) -Delete image,image's chunks of the post 

  - Headers

        x-auth-token: post._id

* Response: 200 (application/json)

  - Body

          {
            "msg": "Post removed"
          }
