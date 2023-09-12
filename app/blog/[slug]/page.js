import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";


dayjs.extend(relativeTime);

async function getBlog(slug) {
  const response = await fetch(`${process.env.API}/blog/${slug}`, {
    method: "GET",
    next: { revalidate: 1 },
  });

  const data = await response.json();
  return data;
}

export default async function BlogViewPage({ params }) {
  // console.log("params => ", params);
  const blog = await getBlog(params.slug);

  return (
    <main>
      {/* <pre>{JSON.stringify(blog, null, 4)}</pre> */}

      <div className="container mb-5">
        <div className="card">
          <div style={{ height: "300px", overflow: "hidden" }}>
            <img
              src={blog?.image || "/images/default-blog.jpg"}
              className="card-img-top"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
              alt={blog.title}
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">
              <Link href={`/blog/${blog?.slug}`}>{blog.title}</Link>
            </h5>
            <div className="card-text">
              <div
                dangerouslySetInnerHTML={{
                  __html: blog.content,
                }}
              ></div>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <small className="text-muted">Category: {blog.category}</small>
              <small className="text-muted">
                Author: {blog?.postedBy?.name || "Admin"}
              </small>
            </div>
            <div className="card-footer d-flex justify-content-between">
            
              <small className="text-muted">
                ❤️ {blog?.likes?.length} likes
              </small>
              <small className="text-muted">
                Posted {dayjs(blog.createdAt).fromNow()}
              </small>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
