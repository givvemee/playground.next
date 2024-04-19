"use client";

import "@/shared/style.css";
import { useRef, useState } from "react";
import { useIntersectionObserver } from "../../../../hooks/useIntersectionObserver";
import { LoadMore } from "../LoadMore";

const Notice = () => {
  const getData = () => {
    // Data fetching, good if it's an array
    return null;
  };
  /**
   * isLoadMoreVisible Load More 컴포넌트를 보여줄 것인가? (무한 스크롤을 당겨야 할 정도로 화면에 데이터가 노출되었는가?)
   */
  const [isLoadMoreVisible, setIsLoadMoreVisible] = useState(false);
  /**
   * isLoadedAll 더 이상 불러올 데이터가 없는가? 무한 스크롤이 array.length 만큼 로드되었는가?
   */
  const [isLoadedAll, setIsLoadedAll] = useState(false);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const scrollItemRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver({
    target: scrollItemRef,
    onIntersect: getData,
    enabled: !isLoadMoreVisible,
  });

  return (
    <div className="isFlex flex-col">
      {/* Data is Required */}
      <LoadMore
        isVisible={!isLoadMoreVisible}
        isAll={isLoadedAll}
        ref={scrollItemRef}
      />
    </div>
  );
};

export default Notice;
