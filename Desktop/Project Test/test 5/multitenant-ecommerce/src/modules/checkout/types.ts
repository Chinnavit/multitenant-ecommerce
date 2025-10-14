import type Stripe from "stripe";

export type ProductsMetadata = {
    stripeAccountId: string;
    id: string;
    name: string;
    price: number;
};

export type CheckoutMetadata = {
    userId: string;
};

export type ExpandLineItem = Stripe.LineItem & {
    price: Stripe.Price & {
        product: Stripe.Product & {
            metadata: ProductsMetadata,
        };
    };
};