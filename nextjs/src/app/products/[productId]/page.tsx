import React from 'react';

const SingleProductPage = async ({ params, searchParams }) => {
    const productId = await params.productId;
    const productCategory = await searchParams;

    console.log(productCategory);
    return (
        <div>
            Single Product Page
            <h3>Product ID: {productId}</h3>
        </div>
    );
};

export default SingleProductPage;
