/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { listPlantations } from "../graphql/queries";
import ComposantItemPlantation from "./ComposantItemPlantation";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection, Pagination, Placeholder } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
const nextToken = {};
const apiCache = {};
export default function ComposantItemPlantationCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [pageIndex, setPageIndex] = React.useState(1);
  const [hasMorePages, setHasMorePages] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [isApiPagination, setIsApiPagination] = React.useState(false);
  const [instanceKey, setInstanceKey] = React.useState("newGuid");
  const [loading, setLoading] = React.useState(true);
  const [maxViewed, setMaxViewed] = React.useState(1);
  const pageSize = 6;
  const isPaginated = true;
  React.useEffect(() => {
    nextToken[instanceKey] = "";
    apiCache[instanceKey] = [];
  }, [instanceKey]);
  React.useEffect(() => {
    setIsApiPagination(!!!itemsProp);
  }, [itemsProp]);
  const handlePreviousPage = () => {
    setPageIndex(pageIndex - 1);
  };
  const handleNextPage = () => {
    setPageIndex(pageIndex + 1);
  };
  const jumpToPage = (pageNum) => {
    setPageIndex(pageNum);
  };
  const loadPage = async (page) => {
    const cacheUntil = page * pageSize + 1;
    const newCache = apiCache[instanceKey].slice();
    let newNext = nextToken[instanceKey];
    while ((newCache.length < cacheUntil || !isPaginated) && newNext != null) {
      setLoading(true);
      const variables = {
        limit: pageSize,
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await API.graphql({
          query: listPlantations.replaceAll("__typename", ""),
          variables,
        })
      ).data.listPlantations;
      newCache.push(...result.items);
      newNext = result.nextToken;
    }
    const cacheSlice = isPaginated
      ? newCache.slice((page - 1) * pageSize, page * pageSize)
      : newCache;
    setItems(cacheSlice);
    setHasMorePages(!!newNext);
    setLoading(false);
    apiCache[instanceKey] = newCache;
    nextToken[instanceKey] = newNext;
  };
  React.useEffect(() => {
    loadPage(pageIndex);
  }, [pageIndex]);
  React.useEffect(() => {
    setMaxViewed(Math.max(maxViewed, pageIndex));
  }, [pageIndex, maxViewed, setMaxViewed]);
  return (
    <div>
      <Collection
        type="grid"
        searchPlaceholder="Search..."
        templateColumns="1fr 1fr"
        autoFlow="row"
        alignItems="stretch"
        justifyContent="stretch"
        itemsPerPage={pageSize}
        isPaginated={!isApiPagination && isPaginated}
        items={itemsProp || (loading ? new Array(pageSize).fill({}) : items)}
        {...getOverrideProps(overrides, "ComposantItemPlantationCollection")}
        {...rest}
      >
        {(item, index) => {
          if (loading) {
            return <Placeholder key={index} size="large" />;
          }
          return (
            <ComposantItemPlantation
              plantation={item}
              key={item.id}
              {...(overrideItems && overrideItems({ item, index }))}
            ></ComposantItemPlantation>
          );
        }}
      </Collection>
      {isApiPagination && isPaginated && (
        <Pagination
          currentPage={pageIndex}
          totalPages={maxViewed}
          hasMorePages={hasMorePages}
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
          onChange={jumpToPage}
        />
      )}
    </div>
  );
}
