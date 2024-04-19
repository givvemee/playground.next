import "@/shared/style.css";
import { Fragment, forwardRef } from "react";
import "./style.scss";

type LoadMoreProps = {
  isVisible: boolean;
  isAll: boolean;
};

export const LoadMore = forwardRef<HTMLDivElement, LoadMoreProps>(
  ({ isVisible, isAll }, ref) => {
    return (
      <Fragment>
        {isVisible && (
          <div ref={ref} className="isFlex my-2">
            {" "}
            <p className="text-sm">더보기 ... </p>
          </div>
        )}
        {isAll && (
          <div ref={ref} className="isFlex my-2">
            {" "}
            <p className="text-sm">up to date!</p>
          </div>
        )}
      </Fragment>
    );
  }
);

LoadMore.displayName = "LoadMore";
