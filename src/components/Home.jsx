import React, { useState } from "react";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const displayArray = Array.from(Array(1001).keys()).slice(1);
  console.log(displayArray);
  // dispatch(action1);

  return (
    <div>
      Home Component
      {/* <div className=""><Pagination data={displayArray}  recordsPerPage={10}/> 
</div> */}
    </div>
  );
}

export default Home;
