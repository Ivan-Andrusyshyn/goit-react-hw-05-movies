import { Suspense } from "react";
import { Outlet, Link } from "react-router-dom";
import { Loader } from "components/loader/loader";
const LinksDetails = () => {
  return (
    <>
      <ul className="details_list">
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default LinksDetails;
