import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";

function Blogs() {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    (searchParams.get("search") || "").toLowerCase(),
  );
  const [selectedTag, setSelectedTag] = useState(
    searchParams.get("tag")?.toLowerCase() || "",
  );

  useEffect(() => {
    const term = (searchParams.get("search") || "").toLowerCase();
    setSearchTerm(term);

    const tag = (searchParams.get("tag") || "").toLowerCase();
    setSelectedTag(tag);
  }, [searchParams]);

  useEffect(() => {
    fetch("/data/keys/blog-keys.json")
      .then((res) => res.json())
      .then((e) => {
        setData(e);
      })
      .catch((err) => console.error("Failed to load JSON array:", err));
  }, []);

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    const nextValue = searchTerm.trim();

    if (nextValue) {
      params.set("search", nextValue.toLowerCase());
    } else {
      params.delete("search");
    }

    setSearchParams(params, { replace: true });
  };

  const handleFilterChange = (e) => {
    const tag = (e.target.value || "").toLowerCase();
    setSelectedTag(tag);

    const params = new URLSearchParams(searchParams);
    if (tag) {
      params.set("tag", tag);
    } else {
      params.delete("tag");
    }

    setSearchParams(params, { replace: true });
  };

  const fuzzyMatch = (text, pattern) => {
    if (!pattern) return true;

    let patternIdx = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === pattern[patternIdx]) {
        patternIdx += 1;
      }
    }
    return patternIdx === pattern.length;
  };

  const allTags = [
    ...new Set(
      data.flatMap((blog) => {
        if (Array.isArray(blog.tags)) {
          return blog.tags.map((tag) => String(tag).trim().toLowerCase());
        }
        if (blog.tags) {
          // support single-tag strings
          return [String(blog.tags).trim().toLowerCase()];
        }
        return [];
      }),
    ),
  ].sort();

  const filteredData = data.filter((blog) => {
    const title = blog.name?.toLowerCase() || "";
    const tags = (
      Array.isArray(blog.tags) ? blog.tags : blog.tags ? [blog.tags] : []
    ).map((tag) => String(tag).trim().toLowerCase());
    const matchesSearchTerm =
      !searchTerm ||
      fuzzyMatch(title, searchTerm) ||
      tags.some(
        (tag) =>
          // match via fuzzy match or direct inclusion so tag-only matches show up
          fuzzyMatch(tag, searchTerm) ||
          (searchTerm && tag.includes(searchTerm)),
      );

    const matchesSelectedTag =
      !selectedTag || tags.includes(String(selectedTag).trim().toLowerCase());

    return matchesSearchTerm && matchesSelectedTag;
  });

  // Filter Dropdown Toggle Function
  function filterDropdownToggle() {
    dropdownToggle ? setDropdowntoggle(false) : setDropdowntoggle(true);
  }

  const [dropdownToggle, setDropdowntoggle] = useState(false);

  return (
    <>
      <div className="blog-search">
        <div className="blog-search-child1">
          <input
            className="searchInput"
            type="text"
            placeholder="Search blogs..."
            onChange={handleSearchInput}
            value={searchTerm}
          />
          <button className="searchBtn" type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button
          className="filterBtn"
          type="button"
          onClick={filterDropdownToggle}
        >
          Filter
        </button>
        <div
          className="filterDropdown"
          style={{ display: dropdownToggle ? "flex" : "none" }}
        >
          <Link to="/blogs" onClick={filterDropdownToggle}>
            Clear Filter
          </Link>
          <Link to="/blogs?search=physics" onClick={filterDropdownToggle}>
            Physics
          </Link>
          <Link to="/blogs?search=chemistry" onClick={filterDropdownToggle}>
            Chemistry
          </Link>
        </div>
      </div>

      <br />
      <div className="blog-container">
        {filteredData
          .map((blog) => (
            <Link key={blog.id} to={`/blogpost?=${blog.id}`}>
              <BlogCard title={blog.name} date={blog.date} />
            </Link>
          ))
          .reverse()}
      </div>
    </>
  );
}

export default Blogs;
