import { useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";

import { ReviewFrom } from "./review-form";

interface Props {
    productId:string;
}

export const ReviewSidebar = ({ productId }: Props) => {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.reviews.getOne.queryOptions({
        productId,
    }));

    return (
        <ReviewFrom
            productId={productId}
            initialData={data}
        />
    );
};