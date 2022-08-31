import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGifs } from "../store/gif/action/action";
import { useParams } from "react-router-dom";
import { Card } from "../components/Card";
import { CardSkeleton } from "../components/Card/CardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";

const Loading = () => {
    return (
        <div className="w-full grid grid-cols-4 gap-4 mt-7">
            {[...new Array(4)].map((_, i) => (
                <CardSkeleton key={i} />
            ))}
        </div>
    );
};

const Fulfilled = ({ data, offset, loadMore }) => {
    return (
        <div className="w-full grid grid-cols-4 gap-4 mt-7">
            {data.map((value, i) => (
                <Card key={i} data={value} />
            ))}
        </div>
    );
};

export const Gifs = () => {
    const [offset, setOffset] = useState(0);
    const { subcategory } = useParams();
    const dispatch = useDispatch();
    const { gifs, status } = useSelector((state) => state.gifsReducer);

    useEffect(() => {
        dispatch(getGifs(subcategory, offset));
    }, [offset]);

    const loadMore = () => {
        setOffset(offset + 50);
    };

    return (
        <div className="mt-16">
        <h2 className="text-white text-2xl font-bold capitalize">
            {subcategory}
        </h2>

        {status === "fulfilled" ? (
            <InfiniteScroll
                dataLength={offset * 50}
                next={() => loadMore(50)}
                hasMore
                loader={<h1>Loading....</h1>}
            >
                <Fulfilled data={gifs} />
            </InfiniteScroll>
        ) : status === "pending" ? (
            <Loading />
        ) : (
            <></>
        )}
        </div>
    );
};
