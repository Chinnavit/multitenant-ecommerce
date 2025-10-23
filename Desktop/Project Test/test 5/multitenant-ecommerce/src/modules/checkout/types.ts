import type Stripe from "stripe";

export type ProductMetadata = {
    stripeAccountId: string;
    id: string;
    name: string;
    price: string;
};

export type CheckoutMetadata = {
    userId: string;
};

export type ExpandLineItem = Stripe.LineItem & {
    price: Stripe.Price & {
        product: Stripe.Product & {
            metadata: ProductMetadata,
        };
    };
};