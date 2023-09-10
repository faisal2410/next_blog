import Link from "next/link";


export default function BlogCard({ blog }) {
  return (
    <div className="card mb-4">
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img
          src={blog?.image || "/images/default-blog.jpg"}
          className="card-img-top"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          alt={blog.title}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <Link href="">{blog.title}</Link>
        </h5>
     
     
      </div>
    </div>
  );
}
