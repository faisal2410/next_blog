import Link from "next/link";

async function getBlogs(searchParams) {
  // console.log("searchParams => ", searchParams);
  const urlParams = {
    page: searchParams.page || 1,
  };
  const searchQuery = new URLSearchParams(urlParams).toString();
  // console.log("searchQuery => ", searchQuery);
  const response = await fetch(`${process.env.API}/blog?${searchQuery}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 1 },
  });

  if (!response.ok) {
    console.log("Failed to fetch blogs => ", response);
    throw new Error("Failed to fetch  blogs");
  }

  const data = await response.json();
  return data; // {blogs, currentPage, totalPages}
}

export default async function Home({ searchParams }) {
  const data = await getBlogs(searchParams);
  console.log("data in home page => ", data);


  

  return (
    <div>
      <p className="lead text-primary text-center">Latest Blogs</p>

     
      { <pre>{JSON.stringify(data, null, 4)}</pre> }

    
    </div>
  );
}



