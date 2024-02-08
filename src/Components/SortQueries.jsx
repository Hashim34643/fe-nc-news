import React from "react";
import { useNavigate } from "react-router-dom";

const SortQueries = ({ searchParams, handleSortByChange, handleSortOrderChange }) => {
  const navigate = useNavigate();

  const handleInternalSortByChange = (e) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("sortBy", e.target.value);
    navigate(`?${newSearchParams.toString()}`);
    handleSortByChange(e.target.value);
  };

  const handleInternalSortOrderChange = (e) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("order", e.target.value);
    navigate(`?${newSearchParams.toString()}`);
    handleSortOrderChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="sortBy">Sort by:</label>
      <select
        id="sortBy"
        onChange={handleInternalSortByChange}
      >
        <option value="created_at">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
      <label htmlFor="sortOrder">Sort order:</label>
      <select
        id="sortOrder"
        onChange={handleInternalSortOrderChange}
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </div>
  );
};

export default SortQueries;